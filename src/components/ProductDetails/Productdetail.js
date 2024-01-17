import React, { useEffect, useState } from 'react'
import { getProductId } from '../../ApiService/Api'
import { Link, useParams } from 'react-router-dom'
import './Productdetail.css'

function Productdetail() {
    const { id } = useParams();
    const [productDetails, setproductDetails] = useState({})


    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getProductId(id)
            setproductDetails(data)

        }
        fetchProductDetails()

    }, [id])
const handleBuyNow = () => {
    window.confirm("The product is out of stock")
}



    return (
        <div className='product-detail-container'>
            <img src={productDetails.image} alt='' className='product-image' />
            <div className='product-info'>
                <h2 className='product-title'>{productDetails.title}.</h2>
                <p className='product-description'>

                    {productDetails.description}
                </p>
                <p className='product-price'>

                    {productDetails.price}
                </p>
                <button className='buy-now-button' onClick={handleBuyNow}>Buy Now</button>
                <Link to='/' ><button className='go-back-home-button'> Go Back </button>
                </Link>


            </div>

        </div>
    )
}

export default Productdetail