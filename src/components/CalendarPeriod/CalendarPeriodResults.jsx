import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare, MdRemoveRedEye } from "react-icons/md";
import { getCalendarPeriodsByPage } from "../../helpers/calendarPeriod/calendarPeriodHelpers"
import { getFormatedDate } from "../../utils/date"

function CalendarPeriodResults() {
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        year: "Año",
        startDate: "Fecha inicio",
        endDate: "Fecha fin",
        active: "Estado",
        action: "Accion"
    }
    
    function getCalendarPeriods(pageIndex = 1) {
        getCalendarPeriodsByPage(pageIndex)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setResults(data)
                }
                console.log(data)
            })
            .catch(err => setResults({pagination: null, data: []}))
    }

    useEffect(() => {
        getCalendarPeriods()
    }, [])

    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={'/calendar/period/create'}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    (results.ok && results.data.length > 0) && <Pagination pagination={pagination} updateData={getCalendarPeriods} />
                }
            </HStack>
            {
                !results.ok || results.data.length === 0 ? 
                <div>No hay datos para mostrar</div> :
                <TableContainer>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                {Object.values(head).map((head, index) => (
                                    <Th key={index}>{head}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {results.data.map((row, index) => (
                                <Tr key={index}>
                                    <Td>{row.id}</Td>
                                    <Td>{row.year}</Td>
                                    <Td>{getFormatedDate(row.startDate)}</Td>
                                    <Td>{getFormatedDate(row.endDate)}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Link to={`/calendar/period/edit/${row.id}`}>
                                            <Button leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"yellow"} color={"white"}>Editar</Button>
                                        </Link>
                                        <Link to={`/calendar/period/details/${row.id}`}>
                                            <Button leftIcon={<MdRemoveRedEye/>} marginLeft={2} variant={"solid"} colorScheme={"blue"} color={"white"}>Ver horario</Button>
                                        </Link>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            }
        </Container>
    )
}

export default CalendarPeriodResults