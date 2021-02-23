import React, {useContext, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import {ClientProfileContext} from '../contexts/ClientProfileContext'
import Login from '../components/Login/Login'
import DashboardHeader from '../components/Login/DashboardHeader'

const AppointmentDetails = () => {

    const { selectedAppointment, setSelectedAppointment, userLoggedIn } = useContext(ClientProfileContext)

    const {id} = useParams()
    let history = useHistory()

    useEffect(()=>{
        try {
            const fetchData = async () => {
                const response = await ClientFilesApi.get(`/api/1/clientprofile/appointment/${id}`)
                setSelectedAppointment(response.data.data.appointment)
            }
            fetchData()
        } catch (error) {
            console.error(error);
        }  
    }, [])

    const backToClientProfile = () => {
        history.push(`/dashboard/profile/${selectedAppointment.client_id}`)
    }
    
    return (
        <div>
            {!userLoggedIn ?
                <Login />
            :
            <div>
                <DashboardHeader />
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Price</th>
                            <th>Purpose</th>
                        </tr>                   
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.appointment_date}</td>
                            <td>{selectedAppointment.duration}</td>
                            <td>{selectedAppointment.price}</td>
                            <td>{selectedAppointment.treatment_purpose}</td>
                        </tr>                
                    </tbody>
                </table>
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Findings</th>
                            <th>Treatment</th>
                            <th>Results</th> 
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.findings}</td>
                            <td>{selectedAppointment.treatment}</td>
                            <td>{selectedAppointment.immediate_results}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="ui selectable table">
                    <thead>
                        <tr>
                            <th>Remex</th>
                            <th>Treatment Plan</th>
                        </tr>                   
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedAppointment.remex}</td>
                            <td>{selectedAppointment.treatment_plan}</td>
                        </tr>                 
                    </tbody>
                </table>
                <button onClick={backToClientProfile} className="ui button pink" >Back to Client Profile</button>
            </div>
        }
        </div>
        
        
    )
}

export default AppointmentDetails
