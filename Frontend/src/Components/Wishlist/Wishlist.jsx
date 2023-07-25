import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Whislist.css";
// import { deleteItemCart } from "../../Redux/Cart/Action";
import { useNavigate, useParams } from "react-router-dom";
import { addCart, removeWishlist } from "../../Redux/Cart/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
// import { HashLoader } from "react-spinners";

export default function Wishlist() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);
  const data = useSelector((store) => store.cart.wishlist);
  const dispatch = useDispatch();

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

      <div className="WhishlistProductsDiv">
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
                  <div className="whishlist_btn">
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
      <ToastContainer />
    </div>
  );
}
