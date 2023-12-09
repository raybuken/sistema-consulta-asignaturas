import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createClassroomSchema = Yup.object().shape({
    departamentID: Yup.string().required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    isLaboratory: Yup.boolean(),
    active: Yup.string()
        .optional()
})

export const editClassroomSchema = Yup.object().shape({
    departamentID: Yup.string().required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    isLaboratory: Yup.boolean(),
    active: Yup.string()
        .optional()
})
