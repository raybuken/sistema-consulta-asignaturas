import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddTeacherForm from '../../components/Teacher/AddTeacherForm';

function CreateTeacher() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddTeacherForm/>
      </Container>
    </div>
  )
}

export default CreateTeacher