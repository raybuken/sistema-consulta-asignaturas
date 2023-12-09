import { Box, HStack, Stack, Text, Button, useDisclosure, useColorModeValue, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';
import AccordionMenu from './AccordionMenu';
import { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext'
import { useNavigate  } from 'react-router-dom';
import { logout } from '../../helpers/auth/authHelpers';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        logout().finally(() => navigate("/login"))
    }

    return (
        <Box px={4} bg={useColorModeValue('white', 'gray.800')}>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
                <Button ref={btnRef} onClick={onOpen} variant={"ghost"}>
                    <GiHamburgerMenu />
                </Button>

                <HStack gap={3}>
                {
                    auth ? 
                    <>
                        <Text>{auth.user.fullName}</Text>
                        <Button onClick={handleLogout}>Cerrar sesión</Button>
                    </> :
                    
                    <Link to={"login"}>
                        <Button>Iniciar sesión</Button>
                    </Link>
                }
                </HStack>


            </HStack>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <AccordionMenu/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
