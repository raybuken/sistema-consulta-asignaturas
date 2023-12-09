import AddDispatchForm from '../../components/Dispatch/AddDispatchForm';
import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';

function CreateDispatch() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddDispatchForm/>
      </Container>
    </div>
  )
}

export default CreateDispatch