import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem('auth')))

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

