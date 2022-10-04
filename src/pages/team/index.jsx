import React from "react";

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
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="a">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
