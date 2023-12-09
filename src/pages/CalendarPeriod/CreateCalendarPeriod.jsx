import Header from '../../components/Header/Header';
import {Container} from '@chakra-ui/react';
import AddCalendarPeriodForm from '../../components/CalendarPeriod/AddCalendarPeriodForm';

function CreateCalendarPeriod() {
  return (
    <div>
      <Header/>
      <Container maxW={"100ch"}>
        <AddCalendarPeriodForm/>
      </Container>
    </div>
  )
}

export default CreateCalendarPeriod