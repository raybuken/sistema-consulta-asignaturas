import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getCalendarPeriodDetails } from '../../helpers/calendarPeriod/calendarPeriodHelpers';
import EditCalendarPeriodForm from '../../components/CalendarPeriod/EditCalendarPeriodForm';

function EditCalendarPeriod() {
    const { id: calendarPeriodId } = useParams()
    const [calendarPeriod, setCalendarPeriodData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCalendarPeriodDetails(calendarPeriodId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setCalendarPeriodData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [calendarPeriodId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditCalendarPeriodForm id={calendarPeriodId} calendarPeriodData={calendarPeriod}/>
            </Container>
        </div>
    )
}

export default EditCalendarPeriod