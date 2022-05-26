import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login_container'>
            <div className='login_wrapper'>
                <h1 className='login_title'>CREATE AN ACCOUNT</h1>
                <form className='login_form'>
                    <input class='login_input' placeholder="name" />
                    <input class='login_input' placeholder="last name" />
                    <button className='login_button'>CREATE</button>
                    <a className='login_link'>DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a className='login_link'>CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}

export default Login