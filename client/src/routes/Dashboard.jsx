import React from 'react'
import ClientProfileList from '../components/ClientProfileList'

const Dashboard = () => {
    return (
        <div>
            {/* change the name to a variable when logged in */}
            <h1>Hi Cip, welcome to your dashboard</h1>
            <h3 className="tm30">Client Profile List</h3>
            <ClientProfileList />
        </div>
    )
}

export default Dashboard
