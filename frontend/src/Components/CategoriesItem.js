import React from 'react';
import './CategoriesItem.css'

function CategoriesItem({ item }) {
    return (
        <div className="categoriesItem_container">
            <img src={item.img} className="categoriesItem_img" />
            <div className="categoriesItem_info">
                <h1 className="categoriesItem_title">{item.title}</h1>
                <button className="categoriesItem_button">SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoriesItem