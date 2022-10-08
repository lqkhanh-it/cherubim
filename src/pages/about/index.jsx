import React from "react";
import about1 from "./../../img/default.jpeg";
import about2 from "./../../img/default.jpeg";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100 pt-5 pe-5"
                src={about1}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <img
                className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                src={about2}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Về Cherubim
              </div>
              <h1 className="display-6 mb-5">Biến sự mới mẻ thành thói quen</h1>
              <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                <p className="text-dark mb-2">
                  Nhà trường chỉ cho chúng ta chiếc chìa khóa tri thức, học
                  trong cuộc sống là công việc cả đời.
                </p>
                <span className="text-primary">Bill Gates</span>
              </div>
              <p className="mb-5">
                Với phương châm học ngôn ngữ là phải lặp lại, Cherubim mang đến
                một phương pháp giảng dạy đặc biệt giúp học viên luôn được ôn
                lại những kiến thức đã học từ đó biến những thứ mới lạ thành
                thói quen, góp phần lớn trong việc cải thiện kĩ năng và điểm số
              </p>
              <a className="btn btn-primary py-2 px-3 me-3" href="#">
                Tìm hiểu thêm
                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </a>
              <a className="btn btn-outline-primary py-2 px-3" href="#">
                Làm test ngay
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
