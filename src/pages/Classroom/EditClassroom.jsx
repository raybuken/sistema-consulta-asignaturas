import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getClassroomDetails } from '../../helpers/classroom/classroomHelpers';
import EditClassroomForm from '../../components/Classroom/EditClassroomForm';



function EditClassroom() {
    const { id: classroomId } = useParams()
    const [classroomData, setClassroomData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getClassroomDetails(classroomId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setClassroomData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [classroomId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditClassroomForm id={classroomId} classroomData={classroomData}/>
            </Container>
        </div>
    )
}

export default EditClassroom