import React from "react";

const HeaderNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="fw-bold text-primary m-0">
          <span className="text-white">IELST </span>Cherubim
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
            Home
          </a>
          <a href="#" className="nav-item nav-link">
            About
          </a>
          <a href="#" className="nav-item nav-link">
            Causes
          </a>
          <a href="#" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <div className="d-none d-lg-flex ms-2">
          <a className="btn btn-outline-primary py-2 px-3" href="#">
            Donate Now
            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
              <i className="fa fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
