import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import { getSettings } from '../../helpers/settings/settingHelpers';
import SettingsForm from '../../components/Setting/SettingsForm';

function Settings() {
    const [settingsData, setSettingsData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSettings()
            .then(res => res.json())
            .then(data => {
                if(data.ok){
                    setSettingsData(data.data)
                }
            })
            .catch(err => {

            })
            .finally(() => setLoading(false))
    }, [])

    if(loading){
        return null
    }

    return (
        <div>
            <Header />
            <Container maxW={"100ch"}>
                <SettingsForm settingsData={settingsData}/>

            </Container>
        </div>
    )
}

export default Settings