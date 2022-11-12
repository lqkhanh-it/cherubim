import React, { useEffect, useState } from "react";
import logo from "../../img/logo-x.png";
import { Link } from "react-router-dom";

const DEFAULT_PATH = {
  HOME: "HOME",
  COURSE: "COURSE",
  CONTACT: "CONTACT",
};

const HeaderNavbar = ({ modalProps }) => {
  const { openModal } = modalProps;
  const [path, setPath] = useState(DEFAULT_PATH.HOME);

  const setPathChange = (payload) => {
    if (payload) {
      setPath(DEFAULT_PATH[payload] ?? DEFAULT_PATH["HOME"]);
    }
  };

  useEffect(() => {
    const temp = window.location.pathname;
    if (temp === "/contact") {
      setPath(DEFAULT_PATH["CONTACT"]);
    } else if (temp === "/courses") {
      setPath(DEFAULT_PATH["COURSE"]);
    } else {
      setPath(DEFAULT_PATH["HOME"]);
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <img
          src={logo}
          alt="Logo IELTS Cherubim"
          height={70}
          className="mx-2"
        />
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
          <Link
            to={"/"}
            className={`text-white nav-item nav-link ${
              path && path === DEFAULT_PATH.HOME && "active"
            }`}
            onClick={() => {
              setPathChange(DEFAULT_PATH.HOME);
            }}
          >
            Về IELTS Cherubim
          </Link>
          <Link
            to="/courses"
            className={`text-white nav-item nav-link ${
              path && path === DEFAULT_PATH.COURSE && "active"
            }`}
            onClick={() => {
              setPathChange(DEFAULT_PATH.COURSE);
            }}
          >
            Các khóa học
          </Link>
          <Link
            to="/contact"
            className={`text-white nav-item nav-link ${
              path && path === DEFAULT_PATH.CONTACT && "active"
            }`}
            onClick={() => {
              setPathChange(DEFAULT_PATH.CONTACT);
            }}
          >
            Liên hệ
          </Link>
        </div>
        <div className="d-none d-lg-flex ms-2">
          <div
            className="btn btn-cherubim bg-cherubim-50 py-2 px-3"
            onClick={openModal}
          >
            Đăng kí ngay
            <div className="d-inline-flex btn-sm-square text-cherubim rounded-circle ms-2">
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
