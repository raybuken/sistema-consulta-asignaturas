import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createNewPeriod = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/period/create',{
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

export const getPeriodsByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/period/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getPeriodDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/period/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updatePeriod = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/period/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const deletePeriod = async(id) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/period/${id}/delete`, {
        method: "DELETE",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
    })
    
}


