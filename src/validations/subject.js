import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createSubjectSchema = Yup.object().shape({
    knowledgeAreaID: Yup.string()
        .required(RESOURCES.required),
    typeID: Yup.string()
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    theoryCredits: Yup.number()
        .required(RESOURCES.required),
    practiceCredits: Yup.number()
        .required(RESOURCES.required),
    studentQuota: Yup.number()
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})

export const editSubjectSchema = Yup.object().shape({
    knowledgeAreaID: Yup.string()
        .required(RESOURCES.required),
    typeID: Yup.string()
    .required(RESOURCES.required),
    name: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    code: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    description: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    theoryCredits: Yup.number()
        .required(RESOURCES.required),
    practiceCredits: Yup.number()
        .required(RESOURCES.required),
    studentQuota: Yup.number()
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})
