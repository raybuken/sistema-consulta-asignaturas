import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getCareerDetails } from '../../helpers/career/careerHelpers';
import EditCareerForm from '../../components/Career/EditCareerForm';

function EditCareer() {
    const { id: careerId } = useParams()
    const [career, setCareerData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCareerDetails(careerId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setCareerData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [careerId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditCareerForm id={careerId} careerData={career}/>

            </Container>
        </div>
    )
}

export default EditCareer