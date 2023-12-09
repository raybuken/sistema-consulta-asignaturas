import { VStack, Box, Heading, Button, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { loginUserSchema } from '../../validations/user';
import { authenticateUser, storeAuth, } from '../../helpers/auth/authHelpers';
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const toast = useToast()
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions

    setSubmitting(true)
    authenticateUser(values)
      .then(data => data.json())
      .then(data => {
        const results = data.data
        
        if(!results.user || !results.token){
          throw data
        }

        const auth = {
          token: results.token,
          tokenExpiration: results.tokenExpiration,
          user: results.user
        }
        storeAuth(auth)
      })
      .then(() => navigate("/user"))
      .catch(err => {
        toast({
          title: "Error",
          description: err.message,
          status: 'error',
        })
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <Box rounded='md' padding='5' boxShadow='lg' role='group' minH={400} w={500}>
      <Heading as='h1' textAlign='center'>Iniciar Sesion</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginUserSchema}
      >
        {({handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='email'
                placeholder='john.doe@domain.com'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name='email'
                label='Correo electrónico'
                errorMessage={touched.email ? errors.email : ''}
              />

              <FormInput 
                type='password'
                placeholder='1234'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name='password'
                label='Contraseña'
                errorMessage={touched.password ? errors.password : ''}
              />

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Entrar</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default LoginForm