import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createCareer = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/career/create',{
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

export const getCareersByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/career/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getCareerDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/career/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateCareer = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/career/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}


