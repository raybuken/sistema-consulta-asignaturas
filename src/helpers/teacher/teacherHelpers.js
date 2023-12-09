import { API_URL, API_HEADERS } from "../../constants/api";
import { preferences } from "../../constants/preferences";
import { getAuth } from "../../utils/auth";
import { parseTimeToNumber } from '../../utils/time'

export const createNewTeacher = async(data) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + '/teacher/create',{
        method: "POST",
        body: JSON.stringify({
            ...data,
            dispatchID: data.dispatchID || null,
            active: data.active === "active"
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getTeachersByPage = async(pageIndex = 1) => {
    const { PAGE_SIZE } = preferences
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/teacher/all?Page=${pageIndex}&PageSize=${PAGE_SIZE}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getTeacherDetails = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/teacher/${id}`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        }
    })
}

export const updateTeacher = async(id, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/teacher/${id}/edit?id=${id}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const createNewTeacherAvailability = async(teacherID, data) => {
    const auth = getAuth()
    const token = auth.token

    let {startHour, endHour} = data

    const parseredStartHour = parseTimeToNumber(startHour)
    const parseredEndHour = parseTimeToNumber(endHour)

    return await fetch(API_URL + `/teacher/${teacherID}/available/time/create`,{
        method: "POST",
        body: JSON.stringify({
            data: [{
                ...data,
                startHour: parseredStartHour,
                endHour: parseredEndHour,
                active: data.active === "active"
            }]
        }),
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const getTeacherAvailability = async(id) => {
    const auth = getAuth()
    const token = auth.token

    return await fetch(API_URL + `/teacher/${id}/available/time/all`, {
        headers: {
            ...API_HEADERS,
            "UserToken": token
        },
    })
}

export const updateTeacherAvailability = async(teacherID, data) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/teacher/${teacherID}/available/time/edit?id=${teacherID}`, {
        method: "PUT",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify(data)
    })
    
}

export const deleteTeacherAvailability = async(teacherID, availabilityID) => {
    const auth = getAuth()
    const token = auth.token
    
    return await fetch(API_URL + `/teacher/${teacherID}/available/time/delete`, {
        method: "DELETE",
        headers: {
            ...API_HEADERS,
            UserToken: token
        },
        body: JSON.stringify({
            data: [
                availabilityID
            ]
        })
    })
    
}