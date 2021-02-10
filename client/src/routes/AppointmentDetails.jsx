import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'
import {ClientProfileContext} from '../contexts/ClientProfileContext'

const AppointmentDetails = () => {

    const { selectedAppointment, setSelectedAppointment } = useContext(ClientProfileContext)

    const {id} = useParams()
    const params = useParams()

    useEffect(()=>{
        try {
            const fetchData = async () => {
                const response = await ClientFilesApi.get(`/api/1/clientprofiles/${id}`)
                console.log(params)
                // setSelectedAppointment(response.data.data.appointments)
            }
            fetchData()
        } catch (error) {
            console.error(error);
        }
        
    })
    

    return (
        <div>
            <table className="ui selectable table">
                <thead>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Purpose</th>
                </thead>
                <tbody>
                    {selectedAppointment && selectedAppointment.map(()=>{
                        return (
                            <tr>
                                <td>{selectedAppointment.date}</td>
                            </tr>              
                        )
                    })}
                    
                </tbody>
            </table>
            <table className="ui selectable table">
                <thead>
                    <th>Findings</th>
                    <th>Treatment</th>
                    <th>Results</th>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
            <table className="ui selectable table">
                <thead>
                    <th>Remex</th>
                    <th>Treatment Plan</th>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentDetails
