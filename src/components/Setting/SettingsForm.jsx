import {VStack, Box, Heading, Button, useToast, Stack } from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Formik } from 'formik';
import FormInput from '../FormInputs/FormInput';
import { Link } from 'react-router-dom';
import { editSettings } from '../../helpers/settings/settingHelpers';
import { settingSchema } from '../../validations/settings';

function SettingsForm({ settingsData }) {
  const toast = useToast()
  const initialValues = {
    creditCost: settingsData.creditCost,
    hourByCredit: settingsData.hourByCredit,
  }

  const handleSubmit = (values, actions) => {
    const {setSubmitting} = actions

    setSubmitting(true)
    editSettings(values)
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
            title: "Configuracion Actualizada",
            description: "Configuraciones actualizadas con exito",
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
          <Link to={"/"}>
            <Button leftIcon={<ArrowBackIcon/>} variant={"ghost"}>Regresar</Button>
          </Link>
        </Stack>
        <Heading as='h1' textAlign='center'>Configuraciones</Heading>

      </VStack>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={settingSchema}
      >
        {({handleSubmit, handleChange, handleBlur, isSubmitting, values, touched, errors}) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormInput 
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.creditCost}
                name='creditCost'
                label='Costo de credito'
                errorMessage={touched.creditCost ? errors.creditCost : ''}
              />

            <FormInput 
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hourByCredit}
                name='hourByCredit'
                label='Horas por credito'
                errorMessage={touched.hourByCredit ? errors.hourByCredit : ''}
              />

              <Button type='submit' variant='solid' colorScheme='teal' isLoading={isSubmitting}>Actualizar</Button>
            </VStack>
          </form>
        )}

      </Formik>
    </Box>
  )
}

export default SettingsForm