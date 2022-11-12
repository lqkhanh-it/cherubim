import React from "react";
import "../index.css";
import bg from "./../img/contact.jpg";

const bgTemp =
  "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/310943248_1746310762393493_7289507146682034537_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8VMhNDxowCoAX_X4dEr&_nc_ht=scontent.fsgn2-7.fna&oh=03_AdQQhCU2gocm9IUJ25-K7RNkiDzro2v74bCD8E5cxjc5Mg&oe=6396E222";

const BannerV2 = (props) => {
  return (
    <div
      className="newsbanner-container"
      style={{
        backgroundImage: `url(${props?.bannerImage || bgTemp || bg})`,
        backgroundPosition: props.position,
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
