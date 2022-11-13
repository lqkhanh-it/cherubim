import React from "react";
import logo from "../../img/logo-x.png";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-primary text-white footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 col-md-12">
            <img
              className="mb-4"
              src={logo}
              alt="Logo IELTS Cherubim"
              height={80}
            />
            <p>
              ...Vì Cherubim là những Minh Thần, sẽ giúp bạn thoát khỏi đường
              hầm và đến với ánh sáng!!!
            </p>
            {/* <div className="d-flex pt-2">
              <a className="btn btn-square text-primary me-1 disabled" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square text-primary me-1 disabled" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square text-primary me-0 disabled" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "fit-content",
                float: "right",
              }}
            >
              <p className="fa-2x text-white mb-4">Address</p>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>
                <b>Trụ sở chính</b>: 5/109/8N Nơ Trang Long , P.7, Q.Bình Thạnh,
                TP.Hồ Chí Minh
              </p>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>
                <b>Chi nhánh 1</b>: 1034 CMT8, P.4, Q. Tân Bình, TP.Hồ Chí Minh
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>(+84) 94 427 3350
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                info.ieltscherubim@gmail.com
              </p>
              <a
                href="https://www.facebook.com/ielts.cherubim"
                className="text-white"
              >
                <p>
                  <i className="fab fa-facebook-f me-4"></i>
                  facebook.com/ielts.cherubim
                </p>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <h5 className="text-dark mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              IELTS Cherubim &copy; Copyright, 2022. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
