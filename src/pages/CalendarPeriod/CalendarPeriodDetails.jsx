import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useEffect } from 'react'
import { getFullCalendarPeriodDetails } from '../../helpers/calendarPeriod/calendarPeriodHelpers'
import { useState } from 'react'
import { Spinner, VStack } from '@chakra-ui/react'
import CalendarPeriodDetailsResult from '../../components/CalendarPeriod/CalendarPeriodDetailsResult'
import { getAllWeekdays } from '../../helpers/weekday/weekdayHelpers'

function CalendarPeriodDetails() {
    const {id} = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Promise.all([getAllWeekdays(), getFullCalendarPeriodDetails(id)])
            .then(async(res) => {
                return {
                    weekdays: await res[0].json(),
                    data: await res[1].json()
                }
            })
            .then(data => {
                setData(data)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [id])

    if(loading){
        return(
            <VStack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
                <Spinner size={"xl"} color='blue.500'/>
            </VStack>

        )
    }

    return (
        <div>
            <Header />
            <CalendarPeriodDetailsResult data={data}/>
        </div>
    )
}

export default CalendarPeriodDetails