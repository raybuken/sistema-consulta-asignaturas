import { API_URL, API_HEADERS } from "../../constants/api";
import { getAuth } from "../../utils/auth";

export const getAllWeekdays = async() => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/weekday/all`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getWeekday = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/weekday/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}



