import React, { useState } from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import './ProductList.css'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'


function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <div>
            <Navbar />
            <Announcement />
            <h1 className='productList_title'>Garments</h1>
            <div className='productList_filterContainer'>
                <div className='productList_filter'>
                    <p className='productList_filterText'>
                        Filter Products
                        <select className='productList_select' name="color" onChange={handleFilters}>
                            <option selected disabled>Color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <select className='productList_select' name="size" onChange={handleFilters}>
                            <option selected disabled>
                                Size
                            </option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </p>
                </div>
                <div className='productList_filter'>
                    <p className='productList_filterText'>
                        Sort Products
                        <select className='productList_select' onChange={(e) => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="asc">Price (asc)</option>
                            <option value="desc">Price (desc)</option>
                        </select>
                    </p>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList