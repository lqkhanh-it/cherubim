import React from "react";
import logo from "../../img/logoNoText.png";

const HeaderNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="fw-bold text-cherubim-yellow m-0 fs-2">
          <img
            src={logo}
            alt="Logo IELTS Cherubim"
            height={50}
            className="mx-2"
          />
          IELTS Cherubim
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="#" className="nav-item nav-link active">
            Về Cherubim
          </a>
          <a href="#" className="nav-item nav-link">
            Khóa học
          </a>
          <a href="#" className="nav-item nav-link">
            Thời khóa biểu
          </a>
          <a href="#" className="nav-item nav-link">
            Liên hệ
          </a>
        </div>
        <div className="d-none d-lg-flex ms-2">
          <a className="btn btn-cherubim py-2 px-3" href="#">
            Đăng kí ngay
            <div className="d-inline-flex btn-sm-square bg-white text-cherubim rounded-circle ms-2">
              <i className="fa fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
