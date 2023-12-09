import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getSubjectDetails } from '../../helpers/subject/subjectHelpers';
import EditSubjectForm from '../../components/Subject/EditSubjectForm';

function EditSubject() {
    const { id: subjectId } = useParams()
    const [subjectData, setSubjectData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSubjectDetails(subjectId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setSubjectData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [subjectId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditSubjectForm id={subjectId} subjectData={subjectData}/>
            </Container>
        </div>
    )
}

export default EditSubject