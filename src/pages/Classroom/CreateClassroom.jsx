import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddClassroomForm from '../../components/Classroom/AddClassroomForm';

function CreateClassroom() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>        
        <AddClassroomForm/>
      </Container>
    </div>
  )
}

export default CreateClassroom