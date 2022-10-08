import React from "react";
import courses1 from "../../img/default.jpeg";

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Team Members
          </div>
          <h1 className="display-6 mb-5">
            Let's Meet With Our Ordinary Soldiers
          </h1>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4].map(() => {
            return (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={courses1} alt="" />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Full Name</h5>
                    <p className="text-primary">Designation</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square" href="#">
                        <i className="fab fa-instagram"></i>
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

export default Team;
