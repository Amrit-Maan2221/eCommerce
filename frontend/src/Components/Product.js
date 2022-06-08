import React from 'react'
import './Product.css'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


function Product({ item }) {
    return (
        <div className='product_container'>
            <div className='product_circle' />
            <img className='product_image' src={item.img} />
            <div className='product_info'>
                <div className='product_icon'><ShoppingCartOutlined /></div>
                <div className='product_icon'> <Link to={`/product/${item.id}`}><SearchOutlined /></Link></div>
                <div className='product_icon'>  <FavoriteBorderOutlined /></div>
            </div>
        </div>
    )
}

export default Product