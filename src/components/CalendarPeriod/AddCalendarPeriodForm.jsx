import {VStack, Box, Heading, FormControl, Button, Select, FormErrorMessage, useToast, Stack, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createCalendarPeriodSchema } from '../../validations/calendarPeriod';
import { createNewCalendarPeriod } from '../../helpers/calendarPeriod/calendarPeriodHelpers';

function AddCalendarPeriodForm() {
  const toast = useToast()
  const initialValues = {
    startDate: "",
    endDate: "",
    active: false
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions
    const year = new Date(values.startDate).getFullYear()
    const dataForm = {...values, year }

    setSubmitting(true)
    createNewCalendarPeriod(dataForm)
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
            title: "Periodo del calendario Creado",
            description: "Se ha añadido el periodo del calendario exitosamente!",
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
          <Link to={"/calendar/period"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Crear Periodo del calendario</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={createCalendarPeriodSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type='date'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startDate}
                name='startDate'
                label='Fecha inicio'
                errorMessage={touched.startDate ? errors.startDate : ''}
              />

              <FormInput 
                type='date'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endDate}
                name='endDate'
                label='Fecha fin'
                errorMessage={touched.endDate ? errors.endDate : ''}
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

export default AddCalendarPeriodForm