import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddPeriodForm from '../../components/Period/AddPeriodForm';

function CreatePeriod() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddPeriodForm/>
      </Container>
    </div>
  )
}

export default CreatePeriod