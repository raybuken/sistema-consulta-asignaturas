import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createSubject = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/subject/create',{
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

export const getSubjectsByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/subject/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getSubjectDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/subject/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateSubject = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/subject/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const getEquivalentSubjects = async(id) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/subject/${id}/equivalent/all`, {
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
    })
}

export const getIncompatibleSubjects = async(id) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/subject/${id}/incompatible/all`, {
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
    })
}


export const getSubjectsType = async() => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + '/subject/type/all', {
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
    })
}

export const getSubjectType = async(subjectID, typeID) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/subject/${subjectID}/type/${typeID}`, {
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
    })
}