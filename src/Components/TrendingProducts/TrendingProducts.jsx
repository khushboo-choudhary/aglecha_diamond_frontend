import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingProducts.css";

import { HashLoader } from "react-spinners";

export default function TrendingProducts() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [randomId1, setRandomId1] = useState(0);
  const [randomId2, setRandomId2] = useState(0);
  const [randomId3, setRandomId3] = useState(0);
  const [randomId4, setRandomId4] = useState(0);

  useEffect(() => {
    axios
      .get("https://aglecha-backend.onrender.com/product")
      .then((res) => setData(res.data));

    setRandomId1(Math.floor(Math.random() * 10));
    setRandomId2(Math.floor(Math.random() * 10) + 20);
    setRandomId3(Math.floor(Math.random() * 22) + 10);
    setRandomId4(Math.floor(Math.random() * 23) + 10);
  }, []);

  return (
    <div className="TrendingProducts">
      <div className="Heading">
        <div>
          <p>Trending Collection</p>
        </div>
        <div className="TrendingCategory">
          <div onClick={() => navigate("/category/earings/products")}>
            <p>Earings</p>
          </div>
          <div onClick={() => navigate("category/bracelets/products")}>
            <p>Bracelets</p>
          </div>
          <div onClick={() => navigate("/category/chains/products")}>
            <p>Chains</p>
          </div>
          <div onClick={() => navigate("/category/rings/products")}>
            <p>Rings</p>
          </div>
        </div>
      </div>

      <div className="TrendingDisplay">
        <div className="display">
          {data[randomId1] ? (
            <div
              className="IndividualProd"
              onClick={() => {
                navigate(`/${data[randomId1].tag}/${data[randomId1]._id}`);
              }}
            >
              <div className="IndividualProdImg">
                <img
                  src={data[randomId1] ? data[randomId1].image : ""}
                  alt=""
                />
              </div>
              <div className="IndividualProdTitle">
                <p>{data[randomId1] ? data[randomId1].description : ""}</p>
                <p>
                  <span>
                    ₹ {data[randomId1] ? data[randomId1].price.sp : ""}
                  </span>
                  <span>
                    ₹ {data[randomId1] ? data[randomId1].price.mrp : ""}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="IndividualProd">
              <div className="LoaderSinner">
                <HashLoader />
              </div>
            </div>
          )}
        </div>

        <div className="display">
          {data[randomId2] ? (
            <div
              className="IndividualProd"
              onClick={() => {
                navigate(`/${data[randomId2].tag}/${data[randomId2]._id}`);
              }}
            >
              <div className="IndividualProdImg">
                <img
                  src={data[randomId2] ? data[randomId2].image : ""}
                  alt=""
                />
              </div>
              <div className="IndividualProdTitle">
                <p>{data[randomId2] ? data[randomId2].description : ""}</p>
                <p>
                  <span>
                    ₹ {data[randomId2] ? data[randomId2].price.sp : ""}{" "}
                  </span>
                  <span>
                    ₹ {data[randomId2] ? data[randomId2].price.mrp : ""}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="IndividualProd">
              <div className="LoaderSinner">
                <HashLoader />
              </div>
            </div>
          )}
        </div>

        <div className="display">
          {data[randomId3] ? (
            <div
              className="IndividualProd"
              onClick={() => {
                navigate(`/${data[randomId3].tag}/${data[randomId3]._id}`);
              }}
            >
              <div className="IndividualProdImg">
                <img
                  src={data[randomId3] ? data[randomId3].image : ""}
                  alt=""
                />
              </div>
              <div className="IndividualProdTitle">
                <p>{data[randomId3] ? data[randomId3].description : ""}</p>
                <p>
                  <span>
                    ₹ {data[randomId3] ? data[randomId3].price.sp : ""}
                  </span>
                  <span>
                    ₹ {data[randomId3] ? data[randomId3].price.mrp : ""}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="IndividualProd">
              <div className="LoaderSinner">
                <HashLoader />
              </div>
            </div>
          )}
        </div>

        <div className="display">
          {data[randomId4] ? (
            <div
              className="IndividualProd"
              onClick={() => {
                navigate(`/${data[randomId4].tag}/${data[randomId4]._id}`);
              }}
            >
              <div className="IndividualProdImg">
                <img
                  src={data[randomId4] ? data[randomId4].image : ""}
                  alt=""
                />
              </div>
              <div className="IndividualProdTitle">
                <p>{data[randomId4] ? data[randomId4].description : ""}</p>
                <p>
                  <span>
                    ₹ {data[randomId4] ? data[randomId4].price.sp : ""}
                  </span>
                  <span>
                    ₹ {data[randomId4] ? data[randomId4].price.mrp : ""}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="IndividualProd">
              <div className="LoaderSinner">
                <HashLoader />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
