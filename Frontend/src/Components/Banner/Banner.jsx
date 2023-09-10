import React from "react";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function BannerPage() {
  const images = [
    {
      url: "https://themes.zone/wp-content/uploads/2018/11/diamond-city-demo-image-2.png",
    },
    {
      url: "https://imgs.search.brave.com/clpnRHtTJu5w2YUvm_OBv76pEnCfgniGuxPFffTeCD4/rs:fit:1227:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/c0pWTU12Z2tLMklm/MDUxVFRRWFd3SGFD/MyZwaWQ9QXBp",
    },
    {
      url: "https://www.angeljewelsonline.com/uploads/images/category_banner/4/4f13ea0f7099821235510770ad560142.jpg",
    },
    {
      url: "https://imgs.search.brave.com/QL7pPBsZwwDhA1-pAkEjH0iOeTRBNdAQLa0UDA0G8Ko/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/YmFja19vcmlnaW5f/cGljLzA0LzU4LzE3/L2ZlOGI3NjRlODg5/M2FhNmM5YzQwYjE1/ZGVkYTU0MGY1Lmpw/Zw",
    },
  ];

  return (
    <div className="BannerPage">
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
}
