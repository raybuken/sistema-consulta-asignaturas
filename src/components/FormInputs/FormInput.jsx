import { FormControl, Input, FormHelperText, FormLabel, FormErrorMessage} from '@chakra-ui/react';

function FormInput({type, placeholder, label, onChange, onBlur, value, name, errorMessage, helperText}) {

  return (
    <FormControl isInvalid={!!errorMessage}>
        <FormLabel>{label}</FormLabel>
        <Input type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} name={name}/>
        {helperText && !errorMessage && <FormHelperText>{helperText}</FormHelperText>}
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}

export default FormInput