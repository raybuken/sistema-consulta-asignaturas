import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare } from "react-icons/md";
import { getPeriodsByPage, deletePeriod } from "../../helpers/period/periodHelpers"

function PeriodResults() {
    const navigate = useNavigate()
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        name: "Nombre",
        months: "Duracion (meses)",
        active: "Estado",
        action: "Accion"
    }
    
    function getPeriods(pageIndex = 1) {
        getPeriodsByPage(pageIndex)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setResults(data)
                }
                console.log(data)
            })
            .catch(err => setResults({pagination: null, data: []}))
    }

    function removePeriod(id){
        deletePeriod(id).then(() => navigate(0))
    }

    useEffect(() => {
        getPeriods()
    }, [])

    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={'/period/create'}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    (results.ok && results.data.length > 0) && <Pagination pagination={pagination} updateData={getPeriods} />
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
                                    <Td>{row.months}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Link to={`/period/edit/${row.id}`}>
                                            <Button leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"yellow"} color={"white"}>Editar</Button>
                                        </Link>
                                        <Button onClick={() => removePeriod(row.id)} marginLeft={2} leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"red"} color={"white"}>Borrar</Button>
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

export default PeriodResults