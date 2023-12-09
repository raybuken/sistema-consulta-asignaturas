import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createDispatchSchema = Yup.object().shape({
    code: Yup.string()
    .max(200, RESOURCES.maxCharacters(200))
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    location: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editDispatchSchema = Yup.object().shape({
    code: Yup.string()
    .max(200, RESOURCES.maxCharacters(200))
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})
