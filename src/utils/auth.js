

export const getAuth = () => {
    return JSON.parse(localStorage.getItem("auth"))
}