import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './routes/Homepage'
import ThanksForBooking from './routes/ThanksForBooking'
import Dashboard from './routes/Dashboard'
import ClientProfile from './routes/ClientProfile'
import AppointmentDetails from './routes/AppointmentDetails'
import { ClientProfileContextProvider } from './contexts/ClientProfileContext'

 
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
              <Route exact path="/dashboard/profile/:id/appointment/:apptid" component={AppointmentDetails}/>
            </Switch>
        </Router>
      </div>
     </ClientProfileContextProvider>
   )
 }
 
 export default App
 