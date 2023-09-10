import React from "react";
import { useNavigate } from "react-router-dom";
import "./SaleOffer.css";

export default function SaleOffer() {
  const navigate = useNavigate();

  return (
    <div className="SaleOffer">
      <p>
        Sale Up To 50% Biggest Discounts. Hurry up! Limited Time Period Offer{" "}
        <span onClick={() => navigate("/category/earings/products")}>
          Visit Now
        </span>
      </p>
    </div>
  );
}
