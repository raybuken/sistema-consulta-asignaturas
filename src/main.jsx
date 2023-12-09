import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/chakraTheme'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutingContainer from './routes/RoutingContainer'
import AuthProvider from './contexts/authContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} toastOptions={{defaultOptions: {position: 'top', isClosable: true, duration: 9000, status: 'success'}}}>
      <AuthProvider>
        <BrowserRouter>
          <RoutingContainer/>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
