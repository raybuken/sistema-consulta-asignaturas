import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text, Checkbox} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createPensumSchema } from '../../validations/pensum';
import { createPensum } from '../../helpers/pensum/pensumHelpers';

function AddPensumForm() {
  const toast = useToast()
  const initialValues = {
    careerID: '',
    code: '',
    year: 2000,
    active: false
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createPensum(values)
      .then(res => res.json())
      .then(data => {
        
        if(!data.ok){
          toast({
            title: "Error",
            description: data.message,
            status: 'error',
          })
        }else{
          resetForm()
          toast({
            title: "Pensum Creado",
            description: "Se ha añadido el pensum exitosamente!",
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
          <Link to={"/pensum"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>


        </Stack>
        <Heading as='h1' textAlign='center'>Crear Pensum</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createPensumSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.careerID}
                name='careerID'
                label='ID de la carrera'
                errorMessage={touched.careerID ? errors.careerID : ''}
              />

              <FormInput 
                type='text'
                placeholder='INGS-P1'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
                name='code'
                label='Codigo'
                errorMessage={touched.code ? errors.code : ''}
              />

              <FormInput 
                type='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.year}
                name='year'
                label='Año'
                errorMessage={touched.year ? errors.year : ''}
              />

              <FormControl isInvalid={touched.active && errors.active}>
                <Text fontWeight={600} marginBottom={".5rem"}>Estado</Text>
                <Select 
                  placeholder='Estado'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.active}
                  name='active'
                >
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
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

export default AddPensumForm