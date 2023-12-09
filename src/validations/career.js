import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createCareerSchema = Yup.object().shape({
    code: Yup.string()
    .max(200, RESOURCES.maxCharacters(200))
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editCareerSchema = Yup.object().shape({
    code: Yup.string()
    .max(200, RESOURCES.maxCharacters(200))
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),   
    active: Yup.string()
        .optional()
})
