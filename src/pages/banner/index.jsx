import React from "react";
import image1 from "../../img/default.jpeg";

const Banner = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ maxHeight: "70vh", minHeight: "70vh" }}
        >
          {[1, 2].map((key) => {
            return (
              <div
                className={`carousel-item ${key % 2 === 0 ? "active" : ""}`}
                key={key}
              >
                <img
                  className="w-100 h-100"
                  src={key % 2 === 0 ? image1 : image1}
                  alt="aa"
                />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 pt-5">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">
                          Let's Change The World With Humanity
                        </h1>
                        <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                          Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                          sed stet lorem sit clita duo justo erat amet
                        </p>
                        <a
                          className="btn btn-primary py-2 px-3 animated slideInDown"
                          href="#"
                        >
                          Learn More
                          <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                            <i className="fa fa-arrow-right"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
