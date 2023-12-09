import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getKnowledgeAreaDetails } from '../../helpers/knowledgeArea/knowledgeAreaHelpers';
import EditKnowledgeAreaForm from '../../components/KnowledgeArea/EditKnowledgeAreaForm';

function EditKnowledgeArea() {
    const { id: knowledgeareaId } = useParams()
    const [knowledgeareaData, setKnowledgeAreaData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getKnowledgeAreaDetails(knowledgeareaId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setKnowledgeAreaData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [knowledgeareaId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditKnowledgeAreaForm id={knowledgeareaId} knowledgeareaData={knowledgeareaData}/>

            </Container>
        </div>
    )
}

export default EditKnowledgeArea