import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createPensum = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/pensum/create',{
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

export const getPensumsByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/pensum/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getPensumDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/pensum/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updatePensum = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/pensum/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const createNewPensumSubjects = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/pensum/${id}/subject/create`,{
        method: "POST",
        body: JSON.stringify({
            data: [{
                ...data,
            }]
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getPensumSubjectsByPage = async(pensumID, pageIndex = 1, periodID = '') => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/pensum/${pensumID}/subject/all?periodID=${periodID}&Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const updatePensumSubjects = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/pensum/${id}/subject/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const deletePensumSubject = async(id) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/pensum/${id}/subject/delete`, {
        method: "DELETE",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify({
            data: [
                id
            ]
        })
    })
    
}
