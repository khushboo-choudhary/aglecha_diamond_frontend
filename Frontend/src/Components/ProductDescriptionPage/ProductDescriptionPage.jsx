import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import "./ProductDescriptionPage.css"
import { addCart, addWishlist } from '../../Redux/Cart/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLoader } from "react-spinners"

export default function ProductDescriptionPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState(null)
 
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart.cart)
    const wishlist = useSelector((store) => store.cart.wishlist)
    console.log("cart bolti hai", cart);
    console.log("wishlist pasand karti hai", wishlist);

    useEffect(() => {
        if (id) axios.get(`https://diamond-khushboo.herokuapp.com/product/id/${id}`).then((res) => setData(res.data))
    }, [id])

    const handleAddBag = () => {
        console.log(data)
        dispatch(addCart(data))
        toast.success("Product Added To Cart Successfully")
    }

    const handleAddWishlist = () => {
        console.log("list")
        dispatch(addWishlist(data))
        alert("Product Added To Wishlist Successfully")
    }

    return (
        <div>

            <div className='CategoryHeading'>
                <p>Product Details</p>
                <p>
                    <span onClick={() => navigate("/")}>Home |</span>
                    <span> Category</span>
                </p>
            </div>

            {
                data ? <div className='ProdDetails'>
                <div className='ProdImages'><img src={data ? data.image : ""} alt="" /></div>

                <div className='ProdInfo'>
                   
                    <div><p>{data ? data.description : ""}</p></div>
                    <div><p>{data ? data.customer_rating : 0} <span class="fa fa-star checked"></span></p></div>

                    <div className='linebreak'></div>

                    <div className='PriceDiv'>
                        <div><p>Rs. {data ? data.price.sp : 0}</p></div>
                        <div><p>Rs. {data ? data.price.mrp : 0}</p></div>
                        <div><p>( {data ? data.price.discount : 0}% OFF )</p></div>
                    </div>

                    <div className='AddButton'>
                        <button class="hbtn hb-fill-right-br" onClick={handleAddBag}>ADD TO BAG</button>
                        <button class="hbtn hb-fill-right-br-left" onClick={handleAddWishlist}>WISHLIST</button>
                    </div>

                    <div className='PorductDetailDiv'>
                        <p>PRODUCT DETAILS</p>
                    </div>

                    <div >
                        <p className='content'> {data ? data.product_details[0] : ""}</p>
                    </div>

                </div>
            </div> : 
                <div className='ProdDetails' ><div className='HashLoaderInd'><HashLoader /></div></div>
            }
            <ToastContainer />
        </div>
    )
}
