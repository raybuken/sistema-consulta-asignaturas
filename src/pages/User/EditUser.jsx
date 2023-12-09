import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { getUserDetails } from '../../helpers/user/userHelpers';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import EditUserForm from '../../components/User/EditUserForm';

function EditUser() {
    const { id: userId } = useParams()
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserDetails(userId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setUserData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [userId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditUserForm id={userId} settingsData={userData}/>

            </Container>
        </div>
    )
}

export default EditUser