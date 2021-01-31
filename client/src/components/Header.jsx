import React from 'react'
import {useHistory} from 'react-router-dom'

const Header = () => {

    let history = useHistory();

    const backToDashboard = () => {
        history.push('/')
    }

    return (
        <div>
            <div className="ui headcolour grey inverted menu">
                <h2 onClick={backToDashboard} className="item">Cip de Vries, RMT</h2>
                <div className="ui item button right">
                    Login
                </div>
            </div>
            
        </div>
    )
}

export default Header
