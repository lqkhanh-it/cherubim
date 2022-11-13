import React from "react";
import Info from "./information";
import HeaderNavbar from "./navbar";

const Header = ({ modalProps }) => {
  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      {/* <Info></Info> */}
      <HeaderNavbar modalProps={modalProps}></HeaderNavbar>
    </div>
  );
};

export default Header;
