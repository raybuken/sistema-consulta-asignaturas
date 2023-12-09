import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createUserSchema = Yup.object().shape({
    fullname: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    email: Yup.string()
        .email(RESOURCES.invalidEmail)
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    password: Yup.string()
        .max(100, RESOURCES.maxCharacters(100))
        .required(RESOURCES.required),
    role: Yup.string()
        .oneOf(["STUDENT", "TEACHER", "ADMIN"], RESOURCES.invalidOption)
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})

export const editUserEschema = Yup.object().shape({
    fullName: Yup.string()
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    email: Yup.string()
        .email(RESOURCES.invalidEmail)
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    role: Yup.string()
        .oneOf(["STUDENT", "TEACHER", "ADMIN"], RESOURCES.invalidOption)
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})

export const loginUserSchema = Yup.object().shape({
    email: Yup.string()
        .email(RESOURCES.invalidEmail)
        .max(200, RESOURCES.maxCharacters(200))
        .required(RESOURCES.required),
    password: Yup.string()
        .max(100, RESOURCES.maxCharacters(100))
        .required(RESOURCES.required),
})
