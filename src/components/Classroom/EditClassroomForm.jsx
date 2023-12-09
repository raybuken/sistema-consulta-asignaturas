import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text, Checkbox} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { updateClassroom } from '../../helpers/classroom/classroomHelpers';
import { editClassroomSchema } from '../../validations/classroom';

function EditClassroomForm({id, classroomData}) {
  const toast = useToast()
  const initialValues = {
    departamentID: classroomData.departamentID,
    name: classroomData.name,
    code: classroomData.code,
    isLaboratory: classroomData.isLaboratory,
    active: classroomData.active
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions
    const dataRequest = {...values, active: values.active === "active"}

    setSubmitting(true)
    updateClassroom(id, dataRequest)
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
            title: "Aula Actualizada",
            description: "Campos del aula actualizado",
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
        <Heading as='h1' textAlign='center'>Editar Aula</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={editClassroomSchema}
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
                isChecked={values.isLaboratory}
                
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
                  value={values.active ? 'active' : 'inactive'}
                  name='active'
                >
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                </Select>
                {touched.active && errors.active && <FormErrorMessage>{errors.active}</FormErrorMessage>}
              </FormControl>

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Actualizar</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default EditClassroomForm