import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createPeriodSchema = Yup.object().shape({
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    months: Yup.number()
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editPeriodSchema = Yup.object().shape({
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    months: Yup.number()
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})
