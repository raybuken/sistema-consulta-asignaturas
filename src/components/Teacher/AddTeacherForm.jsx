import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createTeacherSchema } from '../../validations/teacher';
import { createNewTeacher } from '../../helpers/teacher/teacherHelpers';

function AddTeacherForm() {
  const toast = useToast()
  const initialValues = {
    dispatchID: '',
    knowledgeAreaID: '',
    fullname: '',
    active: false
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createNewTeacher(values)
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
            title: "Docente Creado",
            description: "Se ha añadido el docente exitosamente!",
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
          <Link to={"/teacher"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>


        </Stack>
        <Heading as='h1' textAlign='center'>Crear docente</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createTeacherSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dispatchID}
                name='dispatchID'
                label='ID del despacho'
                errorMessage={touched.dispatchID ? errors.dispatchID : ''}
              />

              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.knowledgeAreaID}
                name='knowledgeAreaID'
                label='Area de conocimiento'
                errorMessage={touched.knowledgeAreaID ? errors.knowledgeAreaID : ''}
              />

              <FormInput 
                type='text'
                placeholder='Ciencia de la Computación e Inteligencia Artificial'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
                name='fullname'
                label='Nombre'
                errorMessage={touched.fullname ? errors.fullname : ''}
              />

              <FormControl isInvalid={touched.active && errors.active}>
                <Text fontWeight={600} marginBottom={".5rem"}>Estado</Text>
                <Select 
                  placeholder='Estado del docente'
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

export default AddTeacherForm