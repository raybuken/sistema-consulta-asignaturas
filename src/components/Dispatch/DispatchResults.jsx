import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare } from "react-icons/md";
import { getDispatchesByPage } from "../../helpers/dispatch/dispatchHelpers"

function DispatchResults() {
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        code: "Codigo",
        name: "Nombre",
        active: "Estado",
        action: "Accion"
    }
    
    function getDispatches(pageIndex = 1) {
        getDispatchesByPage(pageIndex)
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
        getDispatches()
    }, [])

    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={'/dispatch/create'}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    (results.ok && results.data.length > 0) && <Pagination pagination={pagination} updateData={getDispatches} />
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
                                    <Td>{row.code}</Td>
                                    <Td>{row.name}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Link to={`/dispatch/edit/${row.id}`}>
                                            <Button leftIcon={<MdEditSquare/>} variant={"solid"} colorScheme={"yellow"} color={"white"}>Editar</Button>
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

export default DispatchResults