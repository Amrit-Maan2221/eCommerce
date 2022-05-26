import "./Newsletter.css"
import React from 'react'
import { Send } from "@material-ui/icons";

function Newsletter() {
    return (
        <div className="newsletter_container">
            <h1 className="newsletter_title">Newsletter</h1>
            <div className="newsletter_description">Get timely updates from your favorite products.</div>
            <div className="newsletter_inputContainer">
                <input className="newsletter_input" placeholder="Your email" />
                <button className="newsletter_button">
                    <Send />
                </button>
            </div>
        </div>
    )
}

export default Newsletter