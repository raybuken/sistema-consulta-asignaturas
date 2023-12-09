import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { updatePeriod } from '../../helpers/period/periodHelpers';
import { editPeriodSchema } from '../../validations/period';

function EditPeriodForm({id, periodData}) {
  const toast = useToast()
  const initialValues = {
    name: periodData.name,
    months: periodData.months,
    active: periodData.active
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions
    const dataRequest = {...values, active: values.active === "active"}

    setSubmitting(true)
    updatePeriod(id, dataRequest)
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
            title: "Periodo Actualizado",
            description: "Campos del periodo actualizado",
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
          <Link to={"/period"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Editar Periodo</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={editPeriodSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='text'
                placeholder='Primer Cuatrimestre'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name='name'
                label='Nombre'
                errorMessage={touched.name ? errors.name : ''}
              />

              <FormInput 
                type='number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.months}
                name='months'
                label='Duracion (meses)'
                errorMessage={touched.months ? errors.months : ''}
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

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Actualizar</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default EditPeriodForm