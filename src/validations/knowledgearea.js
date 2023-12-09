import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createKnowledgeAreaSchema = Yup.object().shape({
    departamentID: Yup.string().required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editKnowledgeAreaSchema = Yup.object().shape({
    departamentID: Yup.string().required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})
