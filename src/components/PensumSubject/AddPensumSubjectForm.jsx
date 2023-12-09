import {VStack, Box, Heading, Button, useToast, Stack} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createNewPensumSubjects } from '../../helpers/pensum/pensumHelpers';
import { pensumSubjectSchema } from '../../validations/pensumSubject';

function AddPensumSubjectForm({pensumId}) {
  const toast = useToast()
  const initialValues = {
    periodID: '',
    subjectID: '',
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createNewPensumSubjects(pensumId, values)
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
            title: "Asignatura Añadida",
            description: "Se ha añadido la asignatura al pensum exitosamente!",
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
          <Link to={`/pensum/subject/${pensumId}`}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Agregar Asignatura al pensum</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pensumSubjectSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.periodID}
                name='periodID'
                label='ID del periodo'
                errorMessage={touched.periodID ? errors.periodID : ''}
              />

              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subjectID}
                name='subjectID'
                label='ID de la asignatura'
                errorMessage={touched.subjectID ? errors.subjectID : ''}
              />

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Crear</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default AddPensumSubjectForm