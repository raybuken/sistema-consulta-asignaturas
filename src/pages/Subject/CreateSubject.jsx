import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddSubjectForm from '../../components/Subject/AddSubjectForm';

function CreateSubject() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>   
        <AddSubjectForm/>     
      </Container>
    </div>
  )
}

export default CreateSubject