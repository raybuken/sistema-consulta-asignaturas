import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddPensumSubjectForm from '../../components/PensumSubject/AddPensumSubjectForm';
import { useParams } from 'react-router-dom';

function CreatePensumSubject() {
  const {id} = useParams()
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>   
        <AddPensumSubjectForm pensumId={id}/>
      </Container>
    </div>
  )
}

export default CreatePensumSubject