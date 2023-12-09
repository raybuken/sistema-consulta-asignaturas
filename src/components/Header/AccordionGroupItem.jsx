import { AccordionItem, AccordionIcon, AccordionButton, HStack, AccordionPanel, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function AccordionGroupItem({ groupItem }) {

    if(!groupItem.items){
        return (
            <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                        <Link to={groupItem.path}>{groupItem.groupName}</Link>
                    </Box>
                </AccordionButton>
            </h2>
        </AccordionItem>
        )
    }

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                        {groupItem.groupName}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {groupItem.items.map((item, i) =>
                    <HStack key={i}>
                        <Link to={item.path}>{item.name}</Link>
                    </HStack>
                )}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AccordionGroupItem