import React from 'react';
import './Navbar.css';
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from "@material-ui/core";



function Navbar() {
    return (
        <div className='navbar_container'>
            <div className='navbar_left'>
                <span>EN</span>
                <div className='navbar_searchContainer'>
                    <input type="text" placeholder='Search' className='navbar_searchBox' />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                </div>
            </div>
            <div className='navbar_center'>
                <h1>STORISH</h1>
            </div>
            <div className='navbar_right'>
                <div className='navbar_menuItems'>REGISTER</div>
                <div className='navbar_menuItems'>SIGN IN</div>
                <div className='navbar_menuItems'>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Navbar