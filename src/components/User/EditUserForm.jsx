import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { editUserEschema } from '../../validations/user';
import { updateUser } from '../../helpers/user/userHelpers';
import { Link } from 'react-router-dom';

function EditUserForm({id, userData}) {
  const toast = useToast()
  const initialValues = {
    email: userData.email,
    role: userData.role.name,
    fullName: userData.fullName,
    active: userData.active
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions
    const dataRequest = {...values, active: values.active === "active"}

    setSubmitting(true)
    updateUser(id, dataRequest)
      .then(res => res.json())
      .then(data => {
        if(!data.ok){
          toast({
            title: "Error",
            description: data.message,
            status: 'error',
          })
        }else{
          toast({
            title: "Usuario Actualizado",
            description: "Campos del usuario actualizado",
          })
        }
        
      })
      .catch(err => {
        toast({
          title: "Error",
          description: "Ha ocurrido un problema. Intente de nuevo mas tarde.",
          status: 'error',
        })
        console.error(err)
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <Box rounded='md' padding='5' boxShadow='lg' role='group' minH={400} w={"100%"}>
      <VStack>
        <Stack alignSelf="flex-start">
          <Link to={"/user"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Editar Usuario</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={editUserEschema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='email'
                placeholder='john.doe@domain.com'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name='email'
                label='Email'
                errorMessage={touched.email ? errors.email : ''}
              />

              <FormInput 
                type='text'
                placeholder='John Doe'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                name='fullName'
                label='Nombre Completo'
                errorMessage={touched.fullName ? errors.fullName : ''}
              />

              <FormControl isInvalid={touched.role && errors.role}>
                <Text fontWeight={600} marginBottom={".5rem"}>Rol</Text>
                <Select 
                  placeholder='Selecciona el rol'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  name='role'
                >
                  <option value="STUDENT">Estudiante</option>
                  <option value="TEACHER">Docente</option>
                  <option value="ADMIN">Administrador</option>
                </Select>
                {touched.role && errors.role && <FormErrorMessage>{errors.role}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={touched.active && errors.active}>
                <Text fontWeight={600} marginBottom={".5rem"}>Estado</Text>
                <Select 
                  placeholder='Estado del usuario'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.active ? "active" : "inactive"}
                  name='active'
                >
                  <option value="active">Activo</option>
                  <option value="inactive" >Inactivo</option> 
                </Select>
                {touched.active && errors.active && <FormErrorMessage>{errors.active}</FormErrorMessage>}
              </FormControl>

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Crear</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default EditUserForm