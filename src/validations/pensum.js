import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createPensumSchema = Yup.object().shape({
    careerID: Yup.string().required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    year: Yup.number()
        .moreThan(2000)
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})

export const editPensumSchema = Yup.object().shape({
    careerID: Yup.string().required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    year: Yup.number()
        .moreThan(2000)
        .required(RESOURCES.required),    
    active: Yup.string()
        .optional()
})
