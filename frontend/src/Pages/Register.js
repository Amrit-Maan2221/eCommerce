import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className='register_container'>
            <div className='register_wrapper'>
                <h1 className='register_title'>CREATE AN ACCOUNT</h1>
                <form className='register_form'>
                    <input class='register_input' placeholder="name" />
                    <input class='register_input' placeholder="last name" />
                    <input class='register_input' placeholder="username" />
                    <input class='register_input' placeholder="email" />
                    <input class='register_input' placeholder="password" />
                    <input class='register_input' placeholder="confirm password" />
                    <div className='register_agreement'>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button className='register_button'>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Register