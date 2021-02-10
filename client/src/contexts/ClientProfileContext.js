import React, {useState, createContext} from 'react'

export const ClientProfileContext = createContext();

export const ClientProfileContextProvider = (props) => {

    //store list of client profiles in a variable
    const [ClientProfiles, setClientProfiles] = useState([]);

    //set state value for selected client profile
    const [selectedClientProfile, setSelectedClientProfile] = useState([null]);

    //set state value for selected appointment
    const [selectedAppointment, setSelectedAppointment] = useState([])

    // const addClientProfile = (clientProfile) => {
    //     setClientProfiles([...ClientProfiles, clientProfile])
    // }

    return (
        <ClientProfileContext.Provider value={{ClientProfiles, setClientProfiles, selectedClientProfile, setSelectedClientProfile, selectedAppointment, setSelectedAppointment}}>
            {props.children}
        </ClientProfileContext.Provider>
    )
}
