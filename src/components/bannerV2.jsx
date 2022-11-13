import React from "react";
import "../index.css";
import bg from "./../img/contact.jpg";

const bgTemp =
  "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/1598217846407-32NW4OV1HNRJ6WQI0SU6/A+photo+of+a+Christmas+Tree+at+More+London+Place+and+Tower+Bridge+taken+by+Trevor+Sherwin";

const BannerV2 = (props) => {
  return (
    <div
      className="newsbanner-container"
      style={{
        backgroundImage: `url(${props?.bannerImage || bgTemp || bg})`,
        backgroundPosition: "0px -500px" || props.position,
      }}
    >
      <div className="newsbanner-overlay another-overlay">
        <div className="newsbanner-title text-white">{props?.title}</div>
        <div className="newsbanner-breadcrumb text-white-50">
          Trang chủ {">"} {props?.title}
        </div>
      </div>
    </div>
  );
};

export default BannerV2;
