import { Stack, VStack, TableContainer, Table, Thead, Tbody, Td, Tr, Th, Heading, Text} from "@chakra-ui/react"
import { parseNumberToTime } from "../../utils/time"

function CalendarPeriodDetailsResult({ data }) {
    
    const {weekdays:{data:weekdays}} = data
    const {data: results} = data.data
    console.log(results)
    return (
        <Stack>
            <Heading textAlign={"center"} marginBottom={10}>Horario</Heading>
            <TableContainer scrollPaddingX={15}>
                <Table variant={"simple"}>
                    <Thead >
                        <Tr>
                            <Th borderBottomWidth={1} borderColor={"black"}>Asignatura</Th>
                            <Th borderBottomWidth={1} borderColor={"black"}>Descripción</Th>
                            <Th borderBottomWidth={1} borderColor={"black"}>CR</Th>
                            {weekdays.map(weekday => <Th key={weekday.id} borderBottomWidth={1} borderColor={"black"}>{weekday.name}</Th>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {results.map(subject => (
                            <Tr key={subject.principalID}>
                                <Td borderBottomWidth={1} borderBottomColor={"black"}>{subject.code}</Td>
                                <Td borderBottomWidth={1} borderBottomColor={"black"}>{subject.name}</Td>
                                <Td borderBottomWidth={1} borderBottomColor={"black"}>{subject.theoryCredits + subject.practiceCredits}</Td>
                                {
                                    weekdays.map(weekday => {
                                        const teachers = subject.weekDays.find(wd => wd.id === weekday.id)?.teachers
                                        if(!teachers){
                                            return <Td key={weekday.id} borderBottomWidth={1} borderBottomColor={"black"}></Td>
                                        }
                                        return (
                                            <Td key={weekday.id} borderBottomWidth={1} borderBottomColor={"black"}>
                                                <Stack gap={10}>
                                                {teachers.map(teacher => (
                                                    <VStack gap={0} key={teacher.id}>
                                                        <Text>{parseNumberToTime(teacher.startHour)} - {parseNumberToTime(teacher.endHour)}</Text>
                                                        <Text>{teacher.classroom.code}</Text>
                                                        <Text>{teacher.fullName}</Text>
                                                    </VStack>
                                                ))}
                                                </Stack>
                                            </Td>
                                        )
                                    })
                                }
                            </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

export default CalendarPeriodDetailsResult