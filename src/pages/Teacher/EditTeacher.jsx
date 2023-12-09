import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getTeacherDetails } from '../../helpers/teacher/teacherHelpers';
import EditTeacherForm from '../../components/Teacher/EditTeacherForm';

function EditTeacher() {
    const { id: teacherId } = useParams()
    const [teacherData, setTeacherData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTeacherDetails(teacherId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setTeacherData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [teacherId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditTeacherForm id={teacherId} teacherData={teacherData}/>
            </Container>
        </div>
    )
}

export default EditTeacher