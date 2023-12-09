import {Container} from '@chakra-ui/react';
import LoginForm from '../components/Login/LoginForm';
import Header from '../components/Header/Header';

function Login() {
  return (
    <div>
      <Header position="fixed"/>
      <Container height="100dvh" display="flex" alignItems="center">
        <LoginForm/>

      </Container>
    </div>
  )
}

export default Login