import { API_HEADERS, API_URL } from "../../constants/api"
import { getAuth } from "../../utils/auth"

export const getSettings = async() => {
    const auth = getAuth()
    const token = auth.token
    return await fetch(API_URL + "/setting", {
        headers: {
            ...API_HEADERS,
            UserToken: token
        }
    })
}

export const editSettings = async(data) => {
    const auth = getAuth()
    const token = auth.token
    return await fetch(API_URL + "/setting/edit", {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    }).catch(err => err)
}