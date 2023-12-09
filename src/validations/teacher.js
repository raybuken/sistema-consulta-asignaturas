import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createTeacherSchema = Yup.object().shape({
    dispatchID: Yup.string().optional(),
    knowledgeAreaID: Yup.string().required(RESOURCES.required),
    fullname: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})

export const editTeacherSchema = Yup.object().shape({
    dispatchID: Yup.string().required(RESOURCES.required),
    knowledgeAreaID: Yup.string().required(RESOURCES.required),
    fullname: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})
