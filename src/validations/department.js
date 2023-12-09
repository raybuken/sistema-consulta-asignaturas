import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createDepartmentSchema = Yup.object().shape({
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    location: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editDepartmentSchema = Yup.object().shape({
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})
