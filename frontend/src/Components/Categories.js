import { categories } from "../data/categoriesData";
import './Categories.css';
import React from 'react';
import CategoriesItem from '../Components/CategoriesItem'

function Categories() {
    return (
        <div className="categories_container">
            {categories.map((item) => (
                <CategoriesItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories