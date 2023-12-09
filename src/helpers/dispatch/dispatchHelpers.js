import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createNewDispatch = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/dispatch/create',{
        method: "POST",
        body: JSON.stringify({
            ...data,
            active: data.active === "active"
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getDispatchesByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/dispatch/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getDispatchDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/dispatch/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateDispatch = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/dispatch/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}


