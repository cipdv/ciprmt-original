import React, { useContext } from 'react'
import ClientSearchbar from '../components/ClientSearchbar'
import { ClientProfileContext } from '../contexts/ClientProfileContext'
import Login from '../components/Login/Login'


const Dashboard = () => {

    const {userLoggedIn, setUserLoggedIn} = useContext(ClientProfileContext)

    const handleLogin = (e) => {
        e.preventDefault()
        setUserLoggedIn(true)
    }

    return (
        <div>
            {/* change the name to a variable when logged in
            {!userLoggedIn 
                ? 
                <Login />    
                :     */}
                <div>
                    <h1>Hi Cip, welcome to your dashboard</h1>
                    <button onClick={handleLogin} className="ui button olive">View financial statements</button>
                    <ClientSearchbar />
                </div>
            
        </div>
    )
}

export default Dashboard
