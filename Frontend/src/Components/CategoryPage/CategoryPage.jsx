// import axios from 'axios'FormControlLabel
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryPage.css";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";

import { getData } from "../../Redux/CategoryData/Action";

import { HashLoader } from "react-spinners";

export default function CategoryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const data = useSelector((store) => store.categoryReducer.categoryData[0]);
  const loading = useSelector((store) => store.categoryReducer.loading);
  console.log("data coming from redux", data);
  console.log("loading with spinner", loading);

  const [sortby, SetSortby] = useState(1);
  const [discount, SetDiscount] = useState("");
  const [rating, SetRating] = useState("");

  useEffect(() => {
    const dataSend = {
      id,
      sortby,
      discount,
      rating,
    };
    dispatch(getData(dataSend));
  }, [id, sortby, discount, rating, dispatch]);

  console.log("data details", data);

  return (
    <div className="CategoryPageMain">
      <div className="CategoryHeading">
        <p>{id} Category</p>
        <p>
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            Home |
          </span>
          <span> {id} </span>
        </p>
      </div>

      <div className="CategoryBelowCategory">
        <div className="FilterDiv">
          <FormControl>
            <FormLabel
              className="checkDivs"
              id="demo-radio-buttons-group-label"
            >
              CATEGORIES
            </FormLabel>
            <RadioGroup
              className="checkDiv"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="earings"
              name="radio-buttons-group"
            >
              <FormControlLabel
                onClick={() => navigate("/category/earings/products")}
                value="earings"
                control={<Radio />}
                label="Earings"
              />
              <FormControlLabel
                onClick={() => navigate("/category/bracelets/products")}
                value="bracelets"
                control={<Radio />}
                label="Bracelets"
              />
              <FormControlLabel
                onClick={() => navigate("/category/chains/products")}
                value="chains"
                control={<Radio />}
                label="Chains"
              />
              <FormControlLabel
                onClick={() => navigate("/category/rings/products")}
                value="rings"
                control={<Radio />}
                label="Rings"
              />
            </RadioGroup>

            <FormLabel
              className="checkDivs"
              id="demo-radio-buttons-group-label"
            >
              PRICE
            </FormLabel>
            <RadioGroup
              className="checkDiv"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="highLow"
                onClick={() => {
                  SetSortby(-1);
                }}
                control={<Radio />}
                label="High To Low"
              />
              <FormControlLabel
                value="lowHigh"
                onClick={() => {
                  SetSortby(1);
                }}
                control={<Radio />}
                label="Low To High"
              />
            </RadioGroup>

            <FormLabel
              className="checkDivs"
              id="demo-radio-buttons-group-label"
            >
              RATING
            </FormLabel>
            <RadioGroup
              className="checkDiv"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                onClick={() => {
                  SetRating("1");
                }}
                control={<Radio />}
                label=" 1 +"
              />
              <FormControlLabel
                value="2"
                onClick={() => {
                  SetRating("2");
                }}
                control={<Radio />}
                label=" 2 +"
              />
              <FormControlLabel
                value="3"
                onClick={() => {
                  SetRating("3");
                }}
                control={<Radio />}
                label=" 3 +"
              />
              <FormControlLabel
                value="4"
                onClick={() => {
                  SetRating("4");
                }}
                control={<Radio />}
                label=" 4 +"
              />
            </RadioGroup>

            <FormLabel
              className="checkDivs"
              id="demo-radio-buttons-group-label"
            >
              DISCOUNT RANGE
            </FormLabel>
            <RadioGroup
              className="checkDiv"
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="10A"
                onClick={() => {
                  SetDiscount("10");
                }}
                control={<Radio />}
                label="10% and Above"
              />
              <FormControlLabel
                value="20A"
                onClick={() => {
                  SetDiscount("20");
                }}
                control={<Radio />}
                label="20% and Above"
              />
              <FormControlLabel
                value="30A"
                onClick={() => {
                  SetDiscount("30");
                }}
                control={<Radio />}
                label="30% and Above"
              />
              <FormControlLabel
                value="40A"
                onClick={() => {
                  SetDiscount("40");
                }}
                control={<Radio />}
                label="40% and Above"
              />
              <FormControlLabel
                value="50A"
                onClick={() => {
                  SetDiscount("50");
                }}
                control={<Radio />}
                label="50% and Above"
              />
              <FormControlLabel
                value="60A"
                onClick={() => {
                  SetDiscount("60");
                }}
                control={<Radio />}
                label="60% and Above"
              />
              <FormControlLabel
                value="70A"
                onClick={() => {
                  SetDiscount("70");
                }}
                control={<Radio />}
                label="70% and Above"
              />
              <FormControlLabel
                value="80A"
                onClick={() => {
                  SetDiscount("80");
                }}
                control={<Radio />}
                label="80% and Above"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="ProductsDiv">
          {data && loading === false ? (
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
                    <button className="IndividualProdBuyNow">BUY NOW</button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="IndividualProd SpinnerInCategoryDiv">
                <div className="SpinnerInCategory">
                  <HashLoader size={30} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
