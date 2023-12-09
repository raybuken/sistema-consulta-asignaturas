import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const teacherAvailabilitySchema = Yup.object().shape({
    weekdayID: Yup.string()
        .required(RESOURCES.required),
    startHour: Yup.string()
        .required(RESOURCES.required),
    endHour: Yup.string()
        .required(RESOURCES.required),
    active: Yup.string()
        .optional()
})