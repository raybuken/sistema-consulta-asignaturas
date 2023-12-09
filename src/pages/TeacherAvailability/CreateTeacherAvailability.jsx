import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import AddTeacherAvailabilityForm from '../../components/TeacherAvailability/AddTeacherAvailabilityForm';

function CreateTeacherAvailability() {
  const {id} = useParams()
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddTeacherAvailabilityForm teacherId={id} />
      </Container>
    </div>
  )
}

export default CreateTeacherAvailability