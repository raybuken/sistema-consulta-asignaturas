import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createNewDepartment } from '../../helpers/department/departmentHelpers';
import { createDepartmentSchema } from '../../validations/department';

function AddDepartmentForm() {
  const toast = useToast()
  const initialValues = {
    name: '',
    location: '',
    active: false
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createNewDepartment(values)
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
            title: "Departamento Creado",
            description: "Se ha añadido el departamento exitosamente!",
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
          <Link to={"/department"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>


        </Stack>
        <Heading as='h1' textAlign='center'>Crear Departamento</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createDepartmentSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                placeholder='Idiomas'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name='name'
                label='Nombre del departamento'
                errorMessage={touched.name ? errors.name : ''}
              />

            <FormInput 
                type='text'
                placeholder='Calle B #10'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                name='location'
                label='Ubicación'
                errorMessage={touched.location ? errors.location : ''}
              />

              <FormControl isInvalid={touched.active && errors.active}>
                <Text fontWeight={600} marginBottom={".5rem"}>Estado</Text>
                <Select 
                  placeholder='Estado del departamento'
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

export default AddDepartmentForm