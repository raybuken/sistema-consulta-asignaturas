import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getPensumDetails } from '../../helpers/pensum/pensumHelpers';
import EditPensumForm from '../../components/Pensum/EditPensumForm';

function EditPensum() {
    const { id: pensumId } = useParams()
    const [pensumData, setPensumData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPensumDetails(pensumId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setPensumData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [pensumId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditPensumForm id={pensumId} pensumData={pensumData}/>
            </Container>
        </div>
    )
}

export default EditPensum