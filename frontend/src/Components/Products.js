import React, { useEffect, useState } from 'react'
import './Products.css'
import { popularProducts } from '../data/popularProductsData'
import Product from './Product'

function Products({ cat, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {
            fetch('http://localhost:5000/api/products').then(
                response => response.json()).then(data => {
                    console.log(data) // Prints result from `response.json()` in getRequest
                }).catch(
                    error => console.log(error)
                )
        }
        getProducts();
    }, [cat]);
    return (
        <div className='products_container'>{popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}</div>
    )
}

export default Products