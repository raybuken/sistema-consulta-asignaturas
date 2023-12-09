import {
    TableContainer,
    Table as TableComponent,
    Tbody,
    Thead,
    Th,
    Tr,
    Td
} from '@chakra-ui/react'

export default function Table({ table }) {
    const {head: headItems, body} = table
    return (
        <TableContainer>
            <TableComponent variant='striped'>
                <Thead>
                    <Tr>
                        {headItems.map((head, index) => (
                            <Th key={index}>{head.text}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {body.map((row, index) => (
                        <Tr key={index}>
                            {row.data.map((value, i) => (
                                <Td key={i}>{value}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </TableComponent>
        </TableContainer>
    )
}