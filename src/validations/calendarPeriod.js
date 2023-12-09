import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const createCalendarPeriodSchema = Yup.object().shape({
    startDate: Yup.string()
        .required(RESOURCES.required),
    endDate: Yup.string()
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})

export const editCalendarPeriodSchema = Yup.object().shape({
    startDate: Yup.string()
        .required(RESOURCES.required),
    endDate: Yup.string()
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})
