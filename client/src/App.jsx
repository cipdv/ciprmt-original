import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './routes/Homepage'
import ThanksForBooking from './routes/ThanksForBooking'
import Dashboard from './routes/Dashboard'
import ClientProfile from './routes/ClientProfile'
import Appointments from './routes/Appointments'
import { ClientProfileContextProvider } from './contexts/ClientProfileContext'
import HealthHistory from './components/HealthHistory'
import AppointmentDetails from './routes/AppointmentDetails'

 
 const App = () => {
   return (
     <ClientProfileContextProvider>
      <div className="ui container tm30">
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/massagedetails" component={ThanksForBooking}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/dashboard/profile/:id" component={ClientProfile}/>
              <Route exact path="/dashboard/profile/:id/appointments" component={Appointments}/>
              <Route exact path="/dashboard/profile/healthhistory/:id" component={HealthHistory}/>
              <Route exact path="/dashboard/profile/:id/appointmentdetails/:id" component={AppointmentDetails} />
            </Switch>
        </Router>
      </div>
     </ClientProfileContextProvider>
   )
 }
 
 export default App
 