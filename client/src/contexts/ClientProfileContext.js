import React, {useState, createContext} from 'react'

export const ClientProfileContext = createContext();

export const ClientProfileContextProvider = (props) => {

    //store list of client profiles in a variable
    const [ClientProfiles, setClientProfiles] = useState([]);

    //set state value for selected client profile
    const [selectedClientProfile, setSelectedClientProfile] = useState([null]);

    // const addClientProfile = (clientProfile) => {
    //     setClientProfiles([...ClientProfiles, clientProfile])
    // }

    return (
        <ClientProfileContext.Provider value={{ClientProfiles, setClientProfiles, selectedClientProfile, setSelectedClientProfile}}>
            {props.children}
        </ClientProfileContext.Provider>
    )
}
