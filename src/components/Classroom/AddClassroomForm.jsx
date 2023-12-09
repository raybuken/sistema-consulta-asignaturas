import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text, Checkbox} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createClassroomSchema } from '../../validations/classroom';
import { createClassroom } from '../../helpers/classroom/classroomHelpers';

function AddClassroomForm() {
  const toast = useToast()
  const initialValues = {
    departamentID: '',
    name: '',
    code: '',
    isLaboratory: false,
    active: false
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createClassroom(values)
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
            title: "Aula Creada",
            description: "Se ha añadido el aula exitosamente!",
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
          <Link to={"/classroom"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>


        </Stack>
        <Heading as='h1' textAlign='center'>Crear Aula</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createClassroomSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.departamentID}
                name='departamentID'
                label='ID del departamento'
                errorMessage={touched.departamentID ? errors.departamentID : ''}
              />

              <FormInput 
                type='text'
                placeholder='1. General A'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name='name'
                label='Nombre'
                errorMessage={touched.name ? errors.name : ''}
              />

              <FormInput 
                type='text'
                placeholder='1-A'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
                name='code'
                label='Codigo'
                errorMessage={touched.code ? errors.code : ''}
              />

              <FormControl isInvalid={touched.active && errors.active}>
                <Checkbox
                onChange={handleChange}
                onBlur={handleBlur}
                name='isLaboratory'
                value={values.isLaboratory}
                >
                  Laboratorio
                </Checkbox>
                {touched.isLaboratory && errors.isLaboratory && <FormErrorMessage>{errors.isLaboratory}</FormErrorMessage>}
              </FormControl>

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

export default AddClassroomForm