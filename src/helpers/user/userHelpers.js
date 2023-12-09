import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createNewUser = async(data) => {
    const {email, password, role, fullname, active} = data
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/user/create',{
        method: "POST",
        body: JSON.stringify({
            role,
            fullName: fullname,
            password,
            email,
            active: active === "active"
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getUsersByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/user/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getUserDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/user/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateUser = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/user/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}


