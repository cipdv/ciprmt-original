import React, {useContext, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import AddAppointment from '../components/AddAppointment'

const ClientProfile = () => {

    let history = useHistory();

    const {id} = useParams();

    const {selectedClientProfile, setSelectedClientProfile} = useContext(ClientProfileContext)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await ClientFilesApi.get(`/api/1/clientprofiles/${id}`)
                setSelectedClientProfile(response.data.data.clientProfile);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    const handleReturnToClientList = () => {
        history.push(`/dashboard`)
    }

    const sendToHealthHistory = () => {
        history.push(`/dashboard/profile/healthhistory/${id}`)
    }

    const viewAppointments = () => {
        history.push(`/dashboard/profile/${id}/appointments`)
    }

    return (
        <div>
            <h2 className="tm30">{selectedClientProfile.first_name}'s profile</h2>
            <table className="ui celled table tm30">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service Selected</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedClientProfile && selectedClientProfile.first_name}</td>
                        <td>{selectedClientProfile && selectedClientProfile.last_name}</td>
                        <td>{selectedClientProfile && selectedClientProfile.email}</td>
                        <td>{selectedClientProfile && selectedClientProfile.phone}</td>
                        <td>{selectedClientProfile && selectedClientProfile.service}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={viewAppointments} className="ui button teal">Appointments</button>
                <button onClick={sendToHealthHistory} className="ui button teal">Health History</button>
                <button onClick={handleReturnToClientList} className="ui button blue"><i className="chevron circle left icon"></i> Back to dashboard</button>
            </div>
            <div style={{marginTop: '3em'}}>
                <AddAppointment />
            </div>
 
        </div>
    )
}

export default ClientProfile
