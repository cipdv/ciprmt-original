import React from 'react'

const Login = () => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="">Username</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <button className="ui button">Login</button>
            </form>
        </div>
    )
}

export default Login
