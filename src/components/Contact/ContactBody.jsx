import React from "react";
import "../../index.css";

const ContactBody = () => {
  return (
    <div className="ContactBody">
      <div className="contact-info">
        <div className="contact-info-title">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>
        <div className="contact-info-detail">
          <div className="contact-info-item">
            <i className="fa fa-map-marker-alt me-3"></i>
            <p className="contact-info-title2">ADDRESS</p>
            <p>
              5/109/8N Nơ Trang Long, Phường 7, Quận. Bình Thạnh, Ho Chi Minh
              City, Vietnam
            </p>
          </div>
          <div className="contact-info-item">
            <i className="fa fa-phone-alt me-3"></i>
            <p className="contact-info-title2">phone</p>
            <p>094 427 33 50</p>
          </div>
          <div className="contact-info-item">
            <i className="fa fa-envelope me-3"></i>
            <p className="contact-info-title2">email</p>
            <p>info.ieltscherubim@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
