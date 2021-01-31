import React from 'react'
import ClientProfileList from '../components/ClientProfileList'

const Dashboard = () => {
    return (
        <div>
            {/* change the name to a variable when logged in */}
            <h1>Hi Cip, welcome to your dashboard</h1>
            <button className="ui button violet">Add an appointment</button>
            <button className="ui button olive">View financial statements</button>
            <h3 className="tm30">Search Client Profiles</h3>
            <ClientProfileList />
        </div>
    )
}

export default Dashboard
