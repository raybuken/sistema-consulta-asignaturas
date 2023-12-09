import AddCareerForm from '../../components/Career/AddCareerForm';
import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';

function CreateCareer() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddCareerForm/>
      </Container>
    </div>
  )
}

export default CreateCareer