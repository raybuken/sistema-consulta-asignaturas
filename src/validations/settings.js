import * as Yup from 'yup'
import { RESOURCES } from '../resources/common'

export const settingSchema = Yup.object().shape({
    creditCost: Yup.number()
        .required(RESOURCES.required),
    hourByCredit: Yup.number()
        .required(RESOURCES.required),
})
