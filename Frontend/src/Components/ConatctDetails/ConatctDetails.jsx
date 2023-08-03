import React, { useEffect, useState } from "react";
import "./ConatctDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart } from "../../Redux/Cart/Action";
import { addShippingAddress } from "../../Redux/ShippingAddress/Action";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
import { addCart, removeOneCart } from "../../Redux/Cart/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConatctDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [totalMRP, setTotalMRP] = useState(0);

  const data = useSelector((store) => store.cart.cart);
  var total = 0;

  for (var i = 0; i < data.length; i++) {
    total += data[i].price.sp * data[i].qty;
  }
  useEffect(() => {
    setTotalMRP(total);
  }, [total]);

  const handleContinue = () => {
    const data = {
      name,
      mobile,
      pincode,
      address,
      locality,
      city,
      state,
    };
    dispatch(addShippingAddress(data));
    navigate("/payment");
  };
  const handleAddBag = (e) => {
    dispatch(addCart(e));
    toast.success("Product Added To Cart Successfully");
  };

  const handleRemoveQuantity = (e) => {
    dispatch(removeOneCart(e));
    toast.success("Product removed from Cart Successfully");
  };

  return (
    <div className="ConatctDetailsMain">
      <div className="ConatctDetails">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <InputLabel htmlFor="standard-adornment-amount">
            <p className="headings">CONTACT DETAILS</p>
          </InputLabel>
          <TextField
            color="secondary"
            focused
            id="outlined-basic"
            label="Name*"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            color="secondary"
            focused
            label="Mobile No*"
            variant="outlined"
            value={mobile}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (mobile.length <= 9) {
                if (e.target.value === "" || re.test(e.target.value)) {
                  setMobile(e.target.value);
                }
              }
            }}
          />

          <InputLabel htmlFor="standard-adornment-amount">
            <p className="headings">ADDRESS</p>
          </InputLabel>
          <TextField
            color="secondary"
            focused
            id="outlined-basic"
            label="Pin Code*"
            variant="outlined"
            value={pincode}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (pincode.length <= 5) {
                if (e.target.value === "" || re.test(e.target.value)) {
                  setPincode(e.target.value);
                }
              }
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Address (House No, Building, Street, Area)*"
            variant="outlined"
            color="secondary"
            focused
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Locality / Town*"
            variant="outlined"
            color="secondary"
            focused
            onChange={(e) => setLocality(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="City / District*"
            variant="outlined"
            color="secondary"
            focused
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="State*"
            variant="outlined"
            color="secondary"
            focused
            onChange={(e) => setState(e.target.value)}
          />
        </Box>

        <div className="SaveAddress">
          <div className="AddressData">
            <p className="headings">SAVE ADDRESS AS</p>
            <h3>Home</h3>
            <h3>Work</h3>
          </div>
        </div>

        {name && mobile && pincode && address && locality && city && state ? (
          <div className="AddAddress">
            <div onClick={() => handleContinue()}>
              <p>ADD ADDRESS / PROCEED TO CHECKOUT</p>
            </div>
          </div>
        ) : (
          <div className="AddAddress">
            <div>
              <p>Please Add Above Details</p>
            </div>
          </div>
        )}
      </div>

      {data.length !== 0 ? (
        <div className="ConatctCartData">
          <div className="CartProdHeading">
            <div>
              <p className="p1">Product</p>
            </div>
            <div>
              <p className="p1">Price</p>
            </div>
            <div>
              <p className="p1">Quantity</p>
            </div>
            <div>
              <p className="p1">Total</p>
            </div>
          </div>

          {data.map((e) => (
            <div className="CartProdHeading IndividualProdCart">
              <div onClick={() => navigate(`/${e.tag}/${e.id}`)}>
                <img src={e.image} alt="" />
              </div>
              <div onClick={() => navigate(`/${e.tag}/${e.id}`)}>
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
      )}
      <ToastContainer />
    </div>
  );
}
