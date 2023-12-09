import { useContext } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

function PublicRoute({ children }) {
    const {auth, setAuth} = useContext(AuthContext)

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem('auth')))

    }, [setAuth])

    if(!auth?.token){
        return children
    }
    
    return <Navigate to={'/user'} />
}

export default PublicRoute