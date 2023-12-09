import {VStack, Box, Heading, Button, useToast, Stack, FormControl, Text, Select, FormErrorMessage} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { createNewTeacherAvailability } from '../../helpers/teacher/teacherHelpers';
import { useState } from 'react';
import { getAllWeekdays } from '../../helpers/weekday/weekdayHelpers';
import { teacherAvailabilitySchema } from '../../validations/teacherAvailability';
import { useEffect } from 'react';

function AddTeacherAvailabilityForm({teacherId}) {
  const [weekdays, setWeekdays] = useState([])
  const toast = useToast()
  const initialValues = {
    weekdayID: '',
    startHour: '18:00',
    endHour: '20:00',
    active: false,
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting, resetForm} = actions
    console.log(values)

    setSubmitting(true)
    createNewTeacherAvailability(teacherId, values)
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
            title: "Disponibilidad Añadida",
            description: "Se ha añadido el horario de disponibilidad exitosamente!",
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

  const getWeekdays = () => {
    getAllWeekdays().then(res => res.json()).then(data => {
      if(data.ok){
        setWeekdays(data.data)
      }
    })
  }

  useEffect(() => {
    getWeekdays()
  }, [])
  

  return (
    <Box rounded='md' padding='5' boxShadow='lg' role='group' minH={400} w={"100%"}>
      <VStack>
        <Stack alignSelf="flex-start">
          <Link to={`/teacher/availability/${teacherId}`}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Volver</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Agregar horario de disponibilidad del maestro</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={teacherAvailabilitySchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              {weekdays.length > 0 &&
                <FormControl isInvalid={touched.typeID && errors.typeID}>
                    <Text fontWeight={600} marginBottom={".5rem"}>Tipo</Text>
                    <Select 
                      placeholder='Selecciona el dia de semana...'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.weekdayID}
                      name='weekdayID'
                    >
                      {weekdays.map(weekday => (
                        <option key={weekday.id} value={weekday.id}>{weekday.name}</option>
                      ))}
                    </Select>
                    {touched.weekdayID && errors.weekdayID && <FormErrorMessage>{errors.weekdayID}</FormErrorMessage>}
                </FormControl> 
              }

              <FormInput 
                type='time'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.startHour}
                name='startHour'
                label='Hora Inicio'
                errorMessage={touched.startHour ? errors.startHour : ''}
              />

              <FormInput 
                type='time'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endHour}
                name='endHour'
                label='Hora Fin'
                errorMessage={touched.endHour ? errors.endHour : ''}
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

export default AddTeacherAvailabilityForm