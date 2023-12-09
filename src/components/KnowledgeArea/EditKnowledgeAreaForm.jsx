import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { editKnowledgeAreaSchema } from '../../validations/knowledgearea';
import { updateKnowledgeArea } from '../../helpers/knowledgeArea/knowledgeAreaHelpers';

function EditKnowledgeAreaForm({id, knowledgeareaData}) {
  const toast = useToast()
  const initialValues = {
    departamentID: knowledgeareaData.departamentID,
    name: knowledgeareaData.name,
    description: knowledgeareaData.description,
    active: knowledgeareaData.active
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions
    const dataRequest = {...values, active: values.active === "active"}

    setSubmitting(true)
    updateKnowledgeArea(id, dataRequest)
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
            title: "Area de conocimiento Actualizado",
            description: "Campos del area de conocimiento actualizado",
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
          <Link to={"/knowledgearea"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Editar Area de conocimiento</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={editKnowledgeAreaSchema}
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
                  placeholder='Ciencia de la Computación e Inteligencia Artificial'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  label='Nombre de area de conocimiento'
                  errorMessage={touched.name ? errors.name : ''}
                />

                <FormInput 
                  type='text'
                  placeholder='Conocimientos sobre IAs y su futuro'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  name='description'
                  label='Descripción'
                  errorMessage={touched.description ? errors.description : ''}
                />

                <FormControl isInvalid={touched.active && errors.active}>
                  <Text fontWeight={600} marginBottom={".5rem"}>Estado</Text>
                  <Select 
                    placeholder='Estado del area de conocimiento'
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

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Actualizar</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default EditKnowledgeAreaForm