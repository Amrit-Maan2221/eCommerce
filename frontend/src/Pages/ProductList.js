import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import './ProductList.css'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Footer from '../Components/Footer'


function ProductList() {
    return (
        <div>
            <Navbar />
            <Announcement />
            <h1 className='productList_title'>Garments</h1>
            <div className='productList_filterContainer'>
                <div className='productList_filter'>
                    <p className='productList_filterText'>
                        Filter Products
                        <select className='productList_select'>
                            <option selected disabled>Color</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Green</option>
                        </select>
                        <select className='productList_select'>
                            <option disabled selected>
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
                        <select className='productList_select'>
                            <option selected>Newest</option>
                            <optio>Price (asc)</optio>
                            <option>Price (desc)</option>
                        </select>
                    </p>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList