import React, { useEffect, useState } from 'react'
import './Products.css'
import { popularProducts } from '../data/popularProductsData'
import Product from './Product'

function Products({ cat, filters, sort }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = () => {
            if (cat) {
                fetch(`http://localhost:5000/api/products?category=${cat}`).then(
                    response => response.json()).then(data => {
                        console.log("Products got:"); // Prints result from `response.json()` in getRequest4
                        console.log(data);
                        setProducts(data);
                    }).catch(
                        error => console.log(error)
                    )
            } else {
                fetch(`http://localhost:5000/api/products`).then(
                    response => response.json()).then(data => {
                        console.log("Products got:" + data); // Prints result from `response.json()` in getRequest4
                        console.log(data);
                    }).catch(
                        error => console.log(error)
                    )
            }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);


    return (
        <div className='products_container'>{popularProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}</div>
    )
}

export default Products