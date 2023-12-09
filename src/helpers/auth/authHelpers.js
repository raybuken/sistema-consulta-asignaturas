import { API_URL, API_HEADERS } from "../../constants/api";

export const authenticateUser = async(data) => {
    const {email, password} = data

    return await fetch(API_URL + "/auth/login",{
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            ...API_HEADERS,
        },
    })
}

export const logout = async() => {

    return await fetch(API_URL + "/auth/logout", {
        method: "POST"
    })
    .then(res => {
        if(res.status === 200){
            localStorage.removeItem("auth")
        }
        return res.status
    })
    .catch(err => 500)
}

export const storeAuth = auth => {
    localStorage.setItem("auth", JSON.stringify(auth))
}