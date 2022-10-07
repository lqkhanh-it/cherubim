import React from "react";
import courses1 from "../../img/img.jpeg";

const Feature = () => {
  return (
    <div className="container-xxl bg-light my-5 py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Feature Causes
          </div>
          <h1 className="display-6 mb-5">
            Lorem ipsum dolor sit amet consectetur quas suscipit sunt?
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          {[1, 2, 3].map(() => {
            return (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                  <div className="text-center p-4 pt-0">
                    <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                      <small>Education</small>
                    </div>
                    <h5 className="mb-3">
                      Lorem ipsum dolor sit amet consectetur
                    </h5>
                    <p>
                      Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                      amet diam et eos
                    </p>
                    <div className="causes-progress bg-light p-3 pt-2">
                      <div className="d-flex justify-content-between">
                        <p className="text-dark">
                          $10,000 <small className="text-body">Goal</small>
                        </p>
                        <p className="text-dark">
                          $9,542 <small className="text-body">Raised</small>
                        </p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={courses1} alt="" />
                    <div className="causes-overlay">
                      <a className="btn btn-outline-primary" href="#">
                        Read More
                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
