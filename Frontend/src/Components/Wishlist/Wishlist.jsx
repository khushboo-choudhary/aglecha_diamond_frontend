import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./CartPage.css";
// import { deleteItemCart } from "../../Redux/Cart/Action";
import { useNavigate, useParams } from "react-router-dom";
import { addWishlist, addCart, removeWishlist } from "../../Redux/Cart/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import { HashLoader } from "react-spinners";

export default function Wishlist() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);
  const data = useSelector((store) => store.cart.wishlist);
  console.log("wishlisthjhghj", data);

  const dispatch = useDispatch();

  // const handleAddBag = () => {
  //   console.log("auth kliya bolti hai inside", isAuth);
  //   dispatch(addCart(data));
  //   // toast("Product Added To Cart Successfully");

  //   dispatch(addWishlist(data));
  //   toast.success("Product Added To Cart Successfully");
  // };

  // const removewishlist = () => {
  //   dispatch(removeWishlist(data));
  // };

  // const handleAddBag = (item) => {
  //   dispatch(addCart(item));
  //   toast.success("Product Added To Cart Successfully");
  // };

  const handleMoveToCart = (item) => {
    dispatch(addCart(item));
    dispatch(removeWishlist(item));
    toast.success("Product Moved To Cart Successfully");
  };

  const handleRemoveWishlist = (item) => {
    dispatch(removeWishlist(item));
    toast.success("Product Removed From Wishlist");
  };

  return (
    <div>
      <div className="CategoryHeading">
        <p>WishList</p>
        <p>
          <span>Home |</span>
          <span> Wishlist </span>
        </p>
      </div>

      <div className="ProductsDiv">
        {data.length !== 0 ? (
          <>
            {data.map((e) => (
              <div
                className="IndividualProd"
                onClick={() => {
                  navigate(`/${id}/${e._id}`);
                }}
              >
                <div className="IndividualProdImg">
                  <img src={e.image} alt="" />
                </div>
                <div className="IndividualProdTitle">
                  <p>{e.description}</p>

                  <p>
                    <span>₹ {e.price.sp}</span>
                    <span>₹ {e.price.mrp}</span>
                    <Button
                      className="IndividualProdRatings"
                      color="success"
                      size="small"
                      variant="contained"
                      endIcon={<StarIcon fontSize="inherit" />}
                    >
                      {e.customer_rating}
                    </Button>
                  </p>
                  <button
                    className="IndividualProdBuyNow"
                    onClick={() => handleMoveToCart(e)}
                  >
                    MOVE TO CART
                  </button>
                  <button
                    className="IndividualProdBuyNow"
                    onClick={() => handleRemoveWishlist(e)}
                  >
                    REMOVE TO WISHLIST
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="EmptyCart">
            <img
              src="https://c.tenor.com/bFkvAnRiQUEAAAAj/stickergiant-swipe-up.gif"
              alt="Empty Cart"
              className="src1"
            />
            <p>Your Wishlist is Empty</p>
            <button
              className="ContinueShoppingButton"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
      {/* 
      {data.length !== 0 ? (
        <div className="CartPage">
          <div className="CartProdHeading">
            <div>
              <p className="heading">Product</p>
            </div>
            <div>
              <p className="heading">Price</p>
            </div>
            <div>
              <p className="heading">Quantity</p>
            </div>
            <div>
              <p className="heading">Total</p>
            </div>
          </div>
          {console.log("checking wishlist page ", data)}
          {data.map((e) => (
            <div className="CartProdHeading IndividualProdCart">
              <div
                onClick={() => {
                  navigate(`/${e.tag}/${e._id}`);
                }}
              >
                <img src={e.image} alt="" />
              </div>
              <div
                onClick={() => {
                  navigate(`/${e.tag}/${e._id}`);
                }}
              >
                <p>{e.description}</p>
              </div>
              <div>
                <p>₹ {e.price.sp}</p>
              </div>
              <div>
                <div className="CartQuantityIncDec">
                  <div>
                    <p>{e.qty}</p>
                  </div>
                  <div>
                    <div onClick={() => handleAddBag(e)}>+</div>
                    <div onClick={() => handleRemoveQuantity(e)}>-</div>
                  </div>
                </div>

                <div
                  className="CartRemove"
                  onClick={() => dispatch(deleteItemCart(e.id))}
                >
                  Remove
                </div>
              </div>
              <div>
                <p>₹ {e.qty * e.price.sp}</p>
              </div>
            </div>
          ))}

          <div className="SubTotalDiv">
            <div>
              <p>Subtotal</p>
            </div>
            <div>
              <p>₹ {totalMRP}</p>
            </div>
          </div>

          <div className="UpdateANDcoupon">
            <div
              class="hbtn hb-fill-right-br"
              onClick={() => navigate("/cart")}
            >
              <p>Update Cart</p>
            </div>
            <div class="hbtn hb-fill-right-br">
              <p>Apply Coupon</p>
            </div>
          </div>

          <div className="Checkout">
            <div class="hbtn hb-fill-right-br" onClick={() => navigate("/")}>
              <p>Continue Shoping</p>
            </div>
            <div
              class="hbtn hb-fill-right-br"
              onClick={() => navigate("/contact")}
            >
              <p>Proceed to checkout</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="EmptyCart">
          <img
            src="https://c.tenor.com/bFkvAnRiQUEAAAAj/stickergiant-swipe-up.gif"
            alt="Empty Cart"
            className="src1"
          />
          <p>Your Cart is Empty</p>
        </div>
      )} */}

      <ToastContainer />
    </div>
  );
}
