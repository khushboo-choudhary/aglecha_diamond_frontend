import React, { useState } from "react";
import "./PaymentPage.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../Redux/Cart/Action";
import Button from "@mui/material/Button";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [Mobilenumber, setMobileNumber] = useState("");

  const data = useSelector((store) => store.cart.cart);

  const shippingAddress = useSelector(
    (store) => store.shippingAddress.ShippingAddress
  );

  var totalMRP = 0;
  var discountMRP = 0;
  var numberOfItems = data.length;

  for (var i = 0; i < data.length; i++) {
    totalMRP += data[i].price.mrp * data[i].qty;
    discountMRP += (data[i].price.mrp - data[i].price.sp) * data[i].qty;
  }

  const dispatch = useDispatch();

  // razor par start
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_tX1SB5d4I3FdzL",
      amount: (totalMRP - discountMRP) * 100,
      currency: "INR",
      description: "Test Transaction",

      handler: async (response) => {
        try {
          const verifyUrl =
            "https://aglecha-backend.onrender.com/api/payment/verify";
          const { data } = await axios
            .post(verifyUrl, response)
            .then((res) => console.log("after Payment", res))
            .catch((error) => {
              navigate("/successful");
              dispatch(emptyCart());
            });
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl =
        "https://aglecha-backend.onrender.com/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: 400 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // razor pay end

  const handleAddNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobileNumber(e.target.value);
    }
  };

  return (
    <div className="PaymentPageMain">
      <div className="PaymentPageFlex">
        <div className="PaymentDetailsDiv">
          <div className="bankOfferDiv">
            <div>
              <p className="totolAmt">Bank Offer</p>
            </div>
            <div>
              <p className="bolder">
                10% off Instant Discount on Kotak Debit Cards on a min spend of
                Rs.3,000. TCA
              </p>
            </div>
            <div>
              <p className="redText">Show more</p>
            </div>
          </div>

          <div className="totolAmt chosePaymentopt">
            <p>Choose Payment Mode</p>
          </div>

          <div className="PaymentModeSelectdiv">
            <div className="MultiplePayOptions">
              <div>
                <div>
                  <p>Cash On Delivery (Cash/Card/UPI)</p>
                </div>

                <div>
                  <p>Credit/Debit Card</p>
                </div>

                <div>
                  <p>PhonePe/Google Pay/Bhim/UPI</p>
                </div>

                <div>
                  <p>PayTm/Payzapp/Wallets</p>
                </div>

                <div>
                  <p>Net Banking</p>
                </div>
              </div>
            </div>

            <div className="payOptionDetails">
              <div>
                <div className="totolAmt paymentHeading">
                  <p>Razor Pay</p>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={Mobilenumber}
                    onChange={(e) => handleAddNumber(e)}
                  />
                </div>

                <div>
                  <Button
                    className="Button"
                    onClick={handlePayment}
                    disabled={Mobilenumber.length !== 10}
                    color="secondary"
                    variant="contained"
                  >
                    <img className="razor" src="razorpay icon.png" alt="" />
                    Pay Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="GiftCardDiv">
            <div className="GiftCardDiv1d totolAmt">
              <p>Have a Gift Card?</p>
            </div>

            <div className="GiftCardDiv2d redText">
              <p>APPLY GIFT CARD</p>
            </div>
          </div>
        </div>

        <div className="ProductPricesDiv">
          {data.length !== 0 ? (
            <div
              className="ProductPricesDivInside"
              onClick={() => navigate("/cart")}
            >
              <div className="priceDiv">
                <p>PRICE DETAILS &nbsp;({numberOfItems} item)</p>
              </div>

              <div className="ProductFlex">
                <div>
                  <p className="bolder">Total MRP</p>
                </div>
                <div>
                  <p className="bolder">₹{totalMRP}</p>
                </div>
              </div>

              <div className="ProductFlex">
                <div>
                  <p className="bolder">Discount on MRP</p>
                </div>
                <div className="greenText">
                  <p>-₹{discountMRP}</p>
                </div>
              </div>

              <div className="ProductFlex marginBtm">
                <div>
                  <p className="bolder">
                    Convenience Fee{" "}
                    <span className="redText">&nbsp;&nbsp; Know More</span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="LineonText">₹99</span>{" "}
                    <span className="greenText">&nbsp;FREE</span>
                  </p>
                </div>
              </div>

              <div className="ProductFlex totolAmt">
                <div>
                  <p className="bolder">Total Amount</p>
                </div>
                <div>
                  <p className="bolder">₹{totalMRP - discountMRP}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="ProductPricesDivInside">
              <img
                src="https://c.tenor.com/bFkvAnRiQUEAAAAj/stickergiant-swipe-up.gif"
                alt="Empty Cart"
                className="src1"
              />
              <p className="noCartDataFound totolAmt">Your Cart is Empty</p>
            </div>
          )}

          {shippingAddress.length === undefined ? (
            <div className="ShippingAddress">
              <div className="priceDiv" style={{ textAlign: "center" }}>
                <p>CUSTOMER ADDRESS</p>
              </div>
              <div>
                <span className="totolAmt">Name:</span>{" "}
                <span>{shippingAddress.name}</span>
              </div>

              <div>
                <p>{shippingAddress.address}</p>
              </div>

              <div>
                <p>{shippingAddress.locality}</p>
              </div>

              <div>
                <p>{shippingAddress.city}</p>
              </div>

              <div>
                <p>{shippingAddress.state}</p>
              </div>

              <div>
                <p>{shippingAddress.pincode}</p>
              </div>

              <div>
                <span className="totolAmt">Mobile No:</span>{" "}
                <span>{shippingAddress.mobile}</span>
              </div>
            </div>
          ) : (
            <div className="ShippingAddress">
              <p className="noAddressFound totolAmt">
                Shipping Address Not Found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
