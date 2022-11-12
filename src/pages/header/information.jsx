import React from "react";

const Information = () => {
  return (
    <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
      <div className="col-lg-6 px-5 text-start">
        <small>
          <i className="fa fa-map-marker-alt me-2"></i>No Trang Long Street,
          HCMC, VN
        </small>
        <small className="ms-4">
          <i className="fa fa-envelope me-2"></i>info.ieltscherubim@gmail.com
        </small>
      </div>
      <div className="col-lg-6 px-5 text-end">
        <small>Theo dõi Cherubim:</small>
        <a
          className="text-white-50 ms-3"
          href="https://www.facebook.com/ielts.cherubim"
          alt="facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        {/* <a className="text-white-50 ms-3" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="text-white-50 ms-3" href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="text-white-50 ms-3" href="#">
          <i className="fab fa-instagram"></i>
        </a> */}
      </div>
    </div>
  );
};

export default Information;
