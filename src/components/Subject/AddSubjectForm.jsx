import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text, Radio, RadioGroup} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Field, Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createSubjectSchema } from '../../validations/subject';
import { createSubject, getSubjectsType } from '../../helpers/subject/subjectHelpers';
import { useState } from 'react';

function AddSubjectForm() {
  const [types, setTypes] = useState([])
  const toast = useToast()
  const initialValues = {
    knowledgeAreaID: '',
    typeID: '',
    name: "",
    code: '',
    description: '',
    theoryCredits: 2,
    practiceCredits: 2,
    studentQuota: 25,
    active: false,
  }

  const getTypes = () => {
    getSubjectsType().then(res => res.json()).then(data => {
      if(data.ok){
        setTypes(data.data)
      }
    })
  }
  
  getTypes()

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions

    setSubmitting(true)
    createSubject(values)
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
            title: "Asignatura Creada",
            description: "Se ha añadido la asignatura exitosamente!",
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
          <Link to={"/subject"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Crear Asignatura</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createSubjectSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.knowledgeAreaID}
                name='knowledgeAreaID'
                label='ID de area de conocimiento'
                errorMessage={touched.knowledgeAreaID ? errors.knowledgeAreaID : ''}
              />

              {types.length > 0 &&
                <FormControl isInvalid={touched.typeID && errors.typeID}>
                  <Text fontWeight={600} marginBottom={".5rem"}>Tipo</Text>
                  <Select 
                    placeholder='Selecciona el tipo...'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.typeID}
                    name='typeID'
                  >
                    {types.map(type => (
                      <option selected={type.id == values.typeID} key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </Select>
                  {touched.typeID && errors.typeID && <FormErrorMessage>{errors.typeID}</FormErrorMessage>}
              </FormControl>

              }

              <FormInput 
                type='text'
                placeholder={"Programación 1"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name='name'
                label='Nombre'
                errorMessage={touched.name ? errors.name : ''}
              />

              <FormInput 
                type='text'
                placeholder={"PRG1"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
                name='code'
                label='Codigo'
                errorMessage={touched.code ? errors.code : ''}
              />

            <FormInput 
                type='text'
                placeholder={"Introducción a la programación"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                name='description'
                label='Descripcion'
                errorMessage={touched.description ? errors.description : ''}
              />

              <FormInput 
                type='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.theoryCredits}
                name='theoryCredits'
                label='Horas teoricas'
                errorMessage={touched.theoryCredits ? errors.theoryCredits : ''}
              />

              <FormInput 
                type='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.practiceCredits}
                name='practiceCredits'
                label='Horas practicas'
                errorMessage={touched.practiceCredits ? errors.practiceCredits : ''}
              />
              
              <FormInput 
                type='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.studentQuota}
                name='studentQuota'
                label='Cupos'
                errorMessage={touched.studentQuota ? errors.studentQuota : ''}
              />

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

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Crear</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default AddSubjectForm