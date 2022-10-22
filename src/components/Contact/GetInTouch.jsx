import React from "react";
import "../../index.css";
import GoogleMap from "./GoogleMap";
import RegisterForm from "../registerForm";

const GetInTouch = () => {
  return (
    <div className="GetInTouch flex">
      <div className="getintouch-container">
        <div className="map">
          <GoogleMap />
        </div>
        <div className="getintouch-form">
          <label>Contact Us</label>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
