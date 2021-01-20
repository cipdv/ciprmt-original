import React, {useState} from 'react'
import ClientFilesApi from '../apis/ClientFilesApi'
import {useHistory} from 'react-router-dom'

const BookAMassage = () => {

    let history = useHistory();

    //make form fields controlled inputs by giving them their own state
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [service, setService] = useState("Select Service")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ClientFilesApi.post("/api/1/clientprofiles", {
                first_name: firstName,
                last_name: lastName,
                email,
                service
            })
            history.push("/massagedetails")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="tm30">
            <h3>Book a Massage</h3>
            <form className="ui form">
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">First Name</label>
                        <input value={firstName} onChange={e=>setFirstName(e.target.value)} type="text" name="first-name" placeholder="First Name"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="">Last Name</label>
                        <input value={lastName} onChange={e=>setLastName(e.target.value)} type="text" name="last-name" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder="email address"/>
                    </div>
                    <div className="required field">
                        {/* <label htmlFor="">Service</label>
                        <div className="ui selection dropdown">
                        <i class="dropdown icon"></i>
                            <div class="default text">Service</div>
                                <div class="menu">
                                    <div class="item" data-value="60">60 minute massage ($95)</div>
                                    <div class="item" data-value="90">90 minute massage ($135)</div>
                                </div>
                            </div> */}
                        <label>Service</label>
                        <select value={service} onChange={e=>setService(e.target.value)} className="ui search dropdown" name="service" placeholder="service">
                            <option value="">Select service</option>
                            <option value="90min">90 min massage ($135)</option>
                            <option value="75min">75 min massage ($115)</option>
                            <option value="60min">60 min massage ($95)</option>
                        </select>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="ui button teal">Submit</button>
            </form>
        </div>
    )
}

export default BookAMassage
