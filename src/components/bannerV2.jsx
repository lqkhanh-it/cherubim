import React from "react";
import "../index.css";

const BannerV2 = (props) => {
  return (
    <div
      className="newsbanner-container"
      style={{
        backgroundImage: `url(${props.bannerImage})`,
        backgroundPosition: props.position,
      }}
    >
      <div className="newsbanner-overlay another-overlay">
        <div className="newsbanner-title">{props?.title}</div>
        <div className="newsbanner-breadcrumb ">
          Trang chủ {">"} {props?.title}
        </div>
      </div>
    </div>
  );
};

export default BannerV2;
