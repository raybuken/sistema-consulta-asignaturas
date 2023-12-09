import AddDepartmentForm from '../../components/Department/AddDepartmentForm';
import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';

function CreateDepartment() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddDepartmentForm/>
      </Container>
    </div>
  )
}

export default CreateDepartment