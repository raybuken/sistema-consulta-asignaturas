import { extendTheme } from '@chakra-ui/react'
import {defineStyleConfig} from '@chakra-ui/react'

const Table = defineStyleConfig({
    variants:{
        striped: {
            bg: "green.400"
        }
    }    

})


export const theme = extendTheme({
    styles: {
        global: (props) => ({
            'html, body': {
                lineHeight: 'base'
            },
            h1: {
                fontSize: 'xl',
                mb: '3'
            },
            p: {
                lineHeight: 1.4
            }
        })
    },
    components: {
        Table,
    }
})
    