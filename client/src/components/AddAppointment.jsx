import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ClientFilesApi from '../apis/ClientFilesApi'

const AddAppointment = () => {

    const {id} = useParams()
    let history = useHistory()

    const [date, setDate] = useState("")
    const [duration, setDuration] = useState(null)
    const [price, setPrice] = useState("")
    const [purpose, setPurpose] = useState("")
    const [findings, setFindings] = useState("")
    const [treatment, setTreatment] = useState("palm press legs, feet, arms, hands")
    const [results, setResults] = useState("")
    const [remex, setRemex] = useState("")
    const [treatmentplan, setTreatmentplan] = useState("")

    const SubmitAddAppointment = async (e) => {
        e.preventDefault()
        try {
            await ClientFilesApi.post(`/api/1/clientprofile/${id}/appointments`, {
                client_id: id,
                appointment_date: date,
                duration,
                price,
                treatment_purpose: purpose,
                findings, 
                treatment, 
                immediate_results: results,
                remex,
                treatment_plan: treatmentplan
            })
            history.push(`/dashboard`)
        } catch (error) {
            console.log(error)
        }
                
    }

    return (
        <div>
            <h3>Add an appointment</h3>
            <form className="ui form">
                <div className="two fields">
                    <div className="field">
                        <label>Date</label>
                        <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Duration</label>
                        <select value={duration} onChange={e=>setDuration(e.target.value)} name="duration" className="ui search dropdown" placeholder="duration" >
                            <option value="">Select duration</option>
                            <option value="90">90 minutes</option>
                            <option value="75">75 minutes</option>
                            <option value="60">60 minutes</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Price</label>
                        
{/* add an if statement to automatically set price based on duration value chosen                         */}

                        <input value={price} onChange={e=>setPrice(e.target.value)} type="text" placeholder="if statement based on duration"/>
                    </div>
                </div>
                <div className="field">
                    <label>Purpose for this massage</label>
                    <input value={purpose} onChange={e=>setPurpose(e.target.value)} type="text" name="purpose"/>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Findings</label>
                        <textarea value={findings} onChange={e=>setFindings(e.target.value)} name="findings" rows="4" />
                    </div>
                    <div className="field">
                        <label>Treatment</label>
                        <textarea value={treatment} onChange={e=>setTreatment(e.target.value)} name="treatment" rows="4"/>
                    </div>
                    <div className="field">
                        <label>Results</label>
                        <textarea value={results} onChange={e=>setResults(e.target.value)} name="results" rows="4"/>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Exercises Prescribed</label>
                        <textarea value={remex} onChange={e=>setRemex(e.target.value)} name="remex" rows="4"/>
                    </div>
                    <div className="field">
                        <label>Treatment Plan</label>
                        <textarea value={treatmentplan} onChange={e=>setTreatmentplan(e.target.value)} name="treatment_plan" rows="4"/>
                    </div>
                </div>
                
{/* when clicked, send receipt to client's email */}
                {/* <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label>Send receipt to email</label>
                    </div>
                </div>              */}
                <button onClick={SubmitAddAppointment} className="ui button pink">Submit</button>
            </form>
            
        </div>
    )
}

export default AddAppointment
