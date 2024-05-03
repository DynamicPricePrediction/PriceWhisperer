import React from 'react'
import {useLocation} from 'react-router-dom';

function LoginRedirect(){
    const location=useLocation()
    return (
        <div>
            <h1>Hello {location.state.id} and Welcome to the home</h1>
        </div>
    )
}

export default LoginRedirect;