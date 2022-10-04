import React from "react";
import Info from "./information";
import HeaderNavbar from "./navbar";

const Header = () => {
  return (
    <div
      className="container-fluid fixed-top px-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <Info></Info>
      <HeaderNavbar></HeaderNavbar>
    </div>
  );
};

export default Header;
