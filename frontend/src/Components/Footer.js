import './Footer.css'
import React from 'react'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";

function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_left'>
                <h1 className='footer_logo'>STORISH</h1>
                <p className='footer_description'>Lorem ipsum odio inventore nostrum exercitationem dolorum non quasi? Nisi suscipit perspiciatis reiciendis tempore quisquam fuga, earum est voluptas voluptatum tenetur fugiat quaerat odio voluptates corrupti!</p>
                <div className='footer_socialIconContainer'>
                    <div className='footer_socialIcon' style={{ backgroundColor: "#3B5999" }}>
                        <Facebook />
                    </div>
                    <div className='footer_socialIcon' style={{ backgroundColor: "#E4405F" }}>
                        <Instagram />
                    </div>
                    <div className='footer_socialIcon' style={{ backgroundColor: "#55ACEE" }}>
                        <Twitter />
                    </div>
                    <div className='footer_socialIcon' style={{ backgroundColor: "#E60023" }}>
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className='footer_center'>
                <h3 className='footer_title'>Useful Links</h3>
                <ul className='footer_list'>
                    <li className='footer_listItem'>Home</li>
                    <li className='footer_listItem'>Cart</li>
                    <li className='footer_listItem'>Man Fashion</li>
                    <li className='footer_listItem'>Woman Fashion</li>
                    <li className='footer_listItem'>Accessories</li>
                    <li className='footer_listItem'>My Account</li>
                    <li className='footer_listItem'>Order Tracking</li>
                    <li className='footer_listItem'>Wishlist</li>
                    <li className='footer_listItem'>Wishlist</li>
                    <li className='footer_listItem'>Terms</li>
                </ul>
            </div>
            <div className='footer_right'>
                <h3 className='footer_title'>Contact</h3>
                <div className='footer_contactItem'>
                    <Room style={{ marginRight: "10px" }} /> xxx Street, Wateroo, ON, Canada
                </div>
                <div className='footer_contactItem'>
                    <Phone style={{ marginRight: "10px" }} /> +1 266 xxx xxxx
                </div>
                <div className='footer_contactItem'>
                    <MailOutline style={{ marginRight: "10px" }} /> xyz@gmail.com
                </div>
                <img className='footer_Payment' src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </div >
    )
}

export default Footer