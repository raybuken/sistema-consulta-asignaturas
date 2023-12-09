import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";

export const createNewDepartment = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/departament/create',{
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            location: data.location,
            active: data.active === "active"
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getDepartmentsByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/departament/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getDepartmentDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/departament/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateDepartment = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/departament/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}


