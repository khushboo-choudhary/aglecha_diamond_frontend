import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="Footer">
      <div className="Footer2">
        <div>
          <p onClick={() => navigate("/")}>
            <DiamondIcon color="error" className="icon" />
            <span className="FontStyleNav">Aglecha Diamond</span>
          </p>
          <p className="address">Registered Address</p>
          <p className="permanent">
            <BusinessIcon />
            &nbsp;&nbsp;#3-12, Gandhi Road, Koramangala,
          </p>
          <p>Bengaluru-562106</p>
          <p className="mobile">
            <CallIcon />
            &nbsp;&nbsp;9898989898
          </p>
          <p className="email">
            <EmailIcon />
            &nbsp;&nbsp;care@aglecha.com
          </p>
        </div>

        <div>
          <p>QUICK LINKS</p>
          <div>
            <p>General Information</p>
            <p>Support</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Track Your Order</p>
          </div>
        </div>

        <div>
          <p>POLICIES</p>
          <div>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div>
          <p>JEWELLERY GUIDE</p>
          <div>
            <p>Certification Guide</p>
            <p>Diamond and Solitaire Guide</p>
            <p>Ring Size Guide</p>
            <p>Jewellery care Guide</p>
          </div>
        </div>

        <div>
          <p>JOIN OUR NEWSLETTER</p>
          <p>Will be used in accordance with our Privacy Policy</p>
          <input type="text" placeholder="Your email address" />
          <button>SIGN UP</button>
          <p>Our Social Links</p>
          <p className="hover">
            <YouTubeIcon /> <FacebookRoundedIcon /> <LinkedInIcon />{" "}
            <InstagramIcon />
          </p>
        </div>
      </div>

      <div className="Foote3">
        <p>
          Copyright ©2022 Aglecha Diamonds | All rights reserved | This template
          is made by Khushboo Choudhary
        </p>
      </div>
    </div>
  );
}
