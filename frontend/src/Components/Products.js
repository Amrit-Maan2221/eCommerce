import React from 'react'
import './Products.css'
import { popularProducts } from '../data/popularProductsData'
import Product from './Product'

function Products() {
    return (
        <div className='products_container'>{popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}</div>
    )
}

export default Products