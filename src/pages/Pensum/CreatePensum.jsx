import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddPensumForm from '../../components/Pensum/AddPensumForm';

function CreatePensum() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>        
        <AddPensumForm/>
      </Container>
    </div>
  )
}

export default CreatePensum