import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { deleteItemCart } from "../../Redux/Cart/Action";
import { useNavigate } from "react-router-dom";
import { addCart, removeOneCart } from "../../Redux/Cart/Action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

export default function CartPage() {
  const navigate = useNavigate();
  const data = useSelector((store) => store.cart.cart);
  const [totalMRP, setTotalMRP] = useState(0);

  var total = 0;

  for (var i = 0; i < data.length; i++) {
    total += data[i]?.price?.sp * data[i]?.qty;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalMRP(total);
  }, [total]);

  const handleAddBag = (e) => {
    const existingProduct = data.find((item) => item._id === e._id);
    if (existingProduct) {
      dispatch(addCart(existingProduct));
      toast.info("Product quantity increased in the cart.");
    } else {
      dispatch(addCart({ ...e, qty: 1 }));
      toast.success("Product Added To The Cart Successfully.");
    }
  };

  const handleRemoveQuantity = (e) => {
    dispatch(removeOneCart(e));
    toast.success("Product removed From Cart Successfully");
  };

  return (
    <div>
      <div className="CategoryHeading">
        <p>Cart Category</p>
        <p>
          <span>Home |</span>
          <span> Cart </span>
        </p>
      </div>

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
          {data.map((e, index) => (
            <div
              className="CartProdHeading IndividualProdCart"
              key={e._id || index}
            >
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
                <p>₹ {e.price?.sp}</p>
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
                <p>₹ {e.qty * e.price?.sp}</p>
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
              className="hbtn hb-fill-right-br"
              onClick={() => navigate("/cart")}
            >
              <p>Update Cart</p>
            </div>
            <div className="hbtn hb-fill-right-br">
              <p>Apply Coupon</p>
            </div>
          </div>

          <div className="Checkout">
            <div
              className="hbtn hb-fill-right-br"
              onClick={() => navigate("/")}
            >
              <p>Continue Shoping</p>
            </div>
            <div
              className="hbtn hb-fill-right-br"
              onClick={() => navigate("/contact")}
            >
              <p>Proceed to checkout</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="EmptyCart">
          <div>
            <img
              src="https://c.tenor.com/bFkvAnRiQUEAAAAj/stickergiant-swipe-up.gif"
              alt="Empty Cart"
              className="src1"
            />
          </div>
          <div>
            <p>Your Cart is Empty</p>
          </div>
          <div>
            <Button
              className="ContinueShoppingButton"
              onClick={() => navigate("/")}
              color="success"
              variant="contained"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}

      {/* <ToastContainer /> */}
    </div>
  );
}
