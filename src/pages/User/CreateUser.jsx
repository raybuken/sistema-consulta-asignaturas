import Header from '../../components/Header/Header';
import AddUserForm from '../../components/User/AddUserForm';
import {Container} from '@chakra-ui/react';

function CreateUser() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddUserForm/>

      </Container>
    </div>
  )
}

export default CreateUser