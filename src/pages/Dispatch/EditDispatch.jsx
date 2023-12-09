import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import EditDispatchForm from '../../components/Dispatch/EditDispatchForm';
import { getDispatchDetails } from '../../helpers/dispatch/dispatchHelpers';


function EditDispatch() {
    const { id: dispatchId } = useParams()
    const [dispatch, setDispatchData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDispatchDetails(dispatchId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setDispatchData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [dispatchId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditDispatchForm id={dispatchId} dispatchData={dispatch}/>

            </Container>
        </div>
    )
}

export default EditDispatch