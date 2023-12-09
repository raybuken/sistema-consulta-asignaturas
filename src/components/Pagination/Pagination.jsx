import { HStack, Text } from '@chakra-ui/react'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

function Pagination({ pagination, updateData }) {
    const { currentPage, prevPage, nextPage, pages } = pagination
    const pagesIndexes = new Array(pages).fill(null)
    return (
        <HStack gap={2}>
            {
                prevPage > 0 ? 
                <>
                    <MdKeyboardDoubleArrowLeft cursor={"pointer"} onClick={() => updateData(1)} />
                    <MdKeyboardArrowLeft cursor={"pointer"} onClick={() => updateData(prevPage)} />    
                </>
                : 
                <>
                    <MdKeyboardDoubleArrowLeft opacity={.5}/>
                    <MdKeyboardArrowLeft opacity={.5} />    
                </>
            }
            
            {
                pagesIndexes.map((_, index) => (
                    index + 1 === currentPage ? <Text key={index} padding={1} lineHeight={1} borderRadius={"100%"} borderStyle={"solid"} backgroundColor={"teal.300"}>{index + 1}</Text>
                    : <Text key={index} cursor={"pointer"} onClick={() => updateData(index + 1)}>{index + 1}</Text>        
                ))
            }

            {
                currentPage === pages ? 
                <>
                    <MdKeyboardArrowRight opacity={.5} />
                    <MdKeyboardDoubleArrowRight opacity={.5} />
                </>
                : 
                <>
                    <MdKeyboardArrowRight cursor={"pointer"} onClick={() => updateData(nextPage)} />
                    <MdKeyboardDoubleArrowRight cursor={"pointer"} onClick={() => updateData(pages)} />
                </>
            }

        </HStack>
    )
}

export default Pagination