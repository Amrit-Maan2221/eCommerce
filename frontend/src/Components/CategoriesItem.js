import React from 'react';
import './CategoriesItem.css';
import { Link } from "react-router-dom";

function CategoriesItem({ item }) {
    return (
        <div className="categoriesItem_container">
            <Link to={`/products/${item.cat}`}>
                <img src={item.img} className="categoriesItem_img" />
                <div className="categoriesItem_info">
                    <h1 className="categoriesItem_title">{item.title}</h1>
                    <button className="categoriesItem_button">SHOP NOW</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoriesItem