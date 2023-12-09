import { getUsersByPage } from "../../helpers/user/userHelpers"
import { useState } from "react"
import {Table, TableContainer, Thead, Tbody, Tr, Th, Td, Container, Button, HStack} from '@chakra-ui/react'
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import Pagination from "../Pagination/Pagination"
import { MdEditSquare } from "react-icons/md";

function UserResults() {
    const [results, setResults] = useState({})
    const head = {
        id: "ID",
        fullName: "Nombre Completo",
        email: "E-mail",
        role: "Rol",
        active: "Estado",
        action: "Accion"
    }
    
    function getUsers(pageIndex = 1) {
        getUsersByPage(pageIndex)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setResults(data)
                }
            })
            .catch(err => setResults({pagination: null, data: []}))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const {pagination} = results

    return (
        <Container maxWidth={"auto"} padding={"10rem"}>
            <HStack justifyContent={"flex-end"}>
                <Link to={'/user/create'}>
                    <Button>+ Nuevo</Button>
                </Link>
                {
                    pagination && <Pagination pagination={pagination} updateData={getUsers} />
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
                                    <Td>{row.fullName}</Td>
                                    <Td>{row.email}</Td>
                                    <Td>{row.role.name}</Td>
                                    <Td>{row.active ? "Activo" : "Inactivo"}</Td>
                                    <Td>
                                        <Link to={`/user/edit/${row.id}`}>
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

export default UserResults