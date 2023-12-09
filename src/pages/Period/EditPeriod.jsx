import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import EditDispatchForm from '../../components/Dispatch/EditDispatchForm';
import { getPeriodDetails } from '../../helpers/period/periodHelpers';
import EditPeriodForm from '../../components/Period/EditPeriodForm';

function EditPeriod() {
    const { id: periodId } = useParams()
    const [period, setPeriodData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPeriodDetails(periodId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setPeriodData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [periodId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditPeriodForm id={periodId} periodData={period}/>
            </Container>
        </div>
    )
}

export default EditPeriod