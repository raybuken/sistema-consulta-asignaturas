import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const pensumSubjectSchema = Yup.object().shape({
    periodID: Yup.string()
        .required(RESOURCES.required),
    subjectID: Yup.string()
        .required(RESOURCES.required),
})