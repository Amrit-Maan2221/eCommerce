import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import './ProductPage.css'

function ProductPage() {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className='productPage_wrapper'>
                <div className='productPage_imgContainer'>
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt='product look' />
                </div>
                <div className='productPage_infoContainer' >
                    <h1 className='productPage_productTitle'>Denim Jumpsuit</h1>
                    <p className='productPage_productDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <span className='productPage_productPrice'>$ 20</span>
                    <div className='productPage_filterContainer'>
                        <div className='productPage_filter'>
                            <span className='productPage_filterTitle'>Color</span>
                            <div className='productPage_FilterColor' style={{ backgroundColor: "black" }} />
                            <div className='productPage_FilterColor' style={{ backgroundColor: "darkblue" }} />
                            <div className='productPage_FilterColor' style={{ backgroundColor: "gray" }} />
                        </div>
                        <div className='productPage_filter'>
                            <span className='productPage_filterTitle'>Size</span>
                            <select className='productPage_filterSize'>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='productPage_cartAddContainer'>
                        <div className='productPage_productAmountContainer'>
                            <Add />
                            <span className='productPage_productAmount'>1</span>
                            <Remove />
                        </div>
                        <button className='productPage_addToCartBtn'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div >
    )
}

export default ProductPage