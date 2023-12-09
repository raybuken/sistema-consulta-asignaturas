import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddKnowledgeAreaForm from '../../components/KnowledgeArea/AddKnowledgeAreaForm';

function CreateKnowledgeArea() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>     
        <AddKnowledgeAreaForm/>   
      </Container>
    </div>
  )
}

export default CreateKnowledgeArea