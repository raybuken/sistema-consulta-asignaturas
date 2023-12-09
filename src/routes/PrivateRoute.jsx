import { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

function PrivateRoute({ children }) {
    const {auth, setAuth} = useContext(AuthContext)

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem('auth')))

    }, [setAuth])

    if(!auth?.token){
        return <Navigate to={'/login'} />
    }

    return children
}

export default PrivateRoute