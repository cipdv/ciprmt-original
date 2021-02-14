import React from 'react'
import ClientSearchbar from '../components/ClientSearchbar'

const Dashboard = () => {
    return (
        <div>
            {/* change the name to a variable when logged in */}
            <h1>Hi Cip, welcome to your dashboard</h1>
            <button className="ui button olive">View financial statements</button>
            <ClientSearchbar />
        </div>
    )
}

export default Dashboard
