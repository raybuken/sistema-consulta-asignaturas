import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import EditDepartmentForm from '../../components/Department/EditDepartmentForm';
import { getDepartmentDetails } from '../../helpers/department/departmentHelpers';

function EditDepartment() {
    const { id: departmentId } = useParams()
    const [departmentData, setDepartmentData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDepartmentDetails(departmentId)
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setDepartmentData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [departmentId])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <EditDepartmentForm id={departmentId} departmentData={departmentData}/>

            </Container>
        </div>
    )
}

export default EditDepartment