import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link, useParams, useNavigate} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare } from "react-icons/md";
import { deletePensumSubject, getPensumSubjectsByPage } from "../../helpers/pensum/pensumHelpers"

function PensumSubjectResults() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        name: "Nombre",
        code: "Codigo",
        knowledgeArea: "Area de conocimiento",
        period: "Periodo",
        type: "Tipo",
        active: "Estado",
        action: "Accion"
    }
    
    function getPensumSubjects(pageIndex = 1) {
        getPensumSubjectsByPage(id, pageIndex)
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
        getPensumSubjects()
    }, [])

    function removePensumSubject(subjectID){
        deletePensumSubject(id, subjectID).then(() => navigate(0))
    }


    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={`/pensum/subject/create/${id}`}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    (results.ok && results.data.length > 0) && <Pagination pagination={pagination} updateData={getPensumSubjects} />
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
                                    <Td>{row.name}</Td>
                                    <Td>{row.code}</Td>
                                    <Td>{row.knowledgeArea.name}</Td>
                                    <Td>{row.period.name}</Td>
                                    <Td>{row.type.name}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Button onClick={() => removePensumSubject(row.id)} marginLeft={2} leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"red"} color={"white"}>Borrar</Button>
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

export default PensumSubjectResults