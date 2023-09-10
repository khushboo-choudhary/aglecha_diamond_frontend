import React from "react";
import "./LandingPage.css";

import SimpleImageSlider from "react-simple-image-slider";

export default function LandingPage() {
  const images = [
    {
      url: "https://img.freepik.com/free-vector/isometric-jewelry-infographics_1284-69685.jpg?w=1060",
    },
    {
      url: "https://imgs.search.brave.com/BdAImBrX2V8qmxLWF8mbUodcdK2hFf2CpiKk-eiqZqE/rs:fit:1123:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/enpUajJfMzdXMkFP/cXNmYlRJMEtRSGFE/SSZwaWQ9QXBp",
    },
    { url: "Banner4.jpeg" },
    { url: "banner2.jpeg" },
    { url: "Banner3.jpeg" },
    {
      url: "https://imgs.search.brave.com/p9Vad-krzyXzcJmKmHuMeRxCaMiFew4hxVaDMNEQHtA/rs:fit:1200:700:1/g:ce/aHR0cHM6Ly90aGVn/b2xkbWFya2V0LmNv/LnVrL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzAxL2pld2Vs/bGVyeS1iYW5uZXIt/cmVkby0yLTEuanBn",
    },
  ];

  return (
    <div className="LandingPage">
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}
