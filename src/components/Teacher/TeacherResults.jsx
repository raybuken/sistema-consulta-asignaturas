import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare, MdRemoveRedEye } from "react-icons/md";
import { getTeachersByPage } from "../../helpers/teacher/teacherHelpers"

function TeacherResults() {
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        dispatch: "Despacho",
        knowledgeArea: "Area de conocimiento",
        fullname: "Nombre",
        active: "Estado",
        action: "Accion"
    }
    
    function getTeachers(pageIndex = 1) {
        getTeachersByPage(pageIndex)
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
        getTeachers()
    }, [])

    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={'/teacher/create'}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    (results.ok && results.data.length > 0) && <Pagination pagination={pagination} updateData={getTeachers} />
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
                                    {<Td>{row.dispatch ? row.dispatch.name : "No aplica"}</Td>}
                                    <Td>{row.knowledgeArea.name}</Td>
                                    <Td>{row.fullName}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Link to={`/teacher/edit/${row.id}`}>
                                            <Button leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"yellow"} color={"white"}>Editar</Button>
                                        </Link>
                                        <Link to={`/teacher/availability/${row.id}`}>
                                            <Button leftIcon={<MdRemoveRedEye />} variant={"solid"} marginLeft={2} colorScheme={"blue"} color={"white"}>Ver disponibilidad</Button>
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

export default TeacherResults