import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link, useParams, useNavigate} from 'react-router-dom'
import { MdEditSquare } from "react-icons/md";
import { deleteTeacherAvailability, getTeacherAvailability } from "../../helpers/teacher/teacherHelpers"
import { parseNumberToTime } from "../../utils/time";

function TeacherAvailabilityResults() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        weekday: "Dia de la semana",
        startHour: "Hora inicio",
        endHour: "Hora fin",
        active: "Estado"
    }
    
    function getAvailability(pageIndex = 1) {
        getTeacherAvailability(id, pageIndex)
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
        getAvailability()
    }, [])

    function removeAvailability(availabilityID){
        deleteTeacherAvailability(id, availabilityID).then(() => navigate(0))
    }

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={`/teacher/availability/create/${id}`}>
                    <Button>+ Nuevo</Button>
                </Link>
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
                                    <Td>{row.weekDay.name}</Td>
                                    <Td>{parseNumberToTime(row.startHour)}</Td>
                                    <Td>{parseNumberToTime(row.endHour)}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Button onClick={() => removeAvailability(row.id)} marginLeft={2} leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"red"} color={"white"}>Borrar</Button>
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

export default TeacherAvailabilityResults