import React from "react";
import defaultImage from "./../../img/default.jpeg";

const About = () => {
  const img =
    "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/314583341_183158230926598_8166090892005115492_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=N3GkeUff5_8AX8x75qt&tn=cQuy9kIxXs8Lm9oA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDWpIa1ETgYvgnFJMmtk3fKNLG8JKT-_fXShfmPXWkG4Q&oe=6373506A";

  const childImage =
    "https://miro.medium.com/max/1400/1*RjkwZJJJvN96ic_9XVf40g.png";
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
                src={img || defaultImage}
                alt=""
                style={{ objectFit: "cover" }}
              />
              {/* <img
                className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                src={childImage || defaultImage}
                alt=""
                style={{ width: "200px", height: "200px" }}
              /> */}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Về Cherubim
              </div>
              <h1 className="display-6 mb-5">Slogan or not</h1>
              <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                <p className="text-dark mb-2">
                  ...Vì Cherubim là những Minh Thần, sẽ giúp bạn thoát khỏi
                  đường hầm và đến với ánh sáng!!!
                </p>
                <span className="text-primary">
                  𝑰𝑬𝑳𝑻𝑺 𝑪𝒉𝒆𝒓𝒖𝒃𝒊𝒎 - #𝑰𝑪 [𝑰 𝒔𝒆𝒆] 𝒕𝒉𝒆 𝒍𝒊𝒈𝒉𝒕!!
                </span>
              </div>
              <p className="mb-5">
                IELTS Cherubim mang đến tâm huyết xây dựng môi trường học thuật
                chất lượng, lành mạnh, Cherubim mong muốn mang đến kết quả học
                tập tốt nhất cho học viên sẽ, đang và đã tham gia chương trình
                học ở đây.
              </p>
              <a
                className="btn btn-primary text-white py-2 px-3 me-3"
                href="/contact"
              >
                Tìm hiểu thêm
                <div className="d-inline-flex btn-sm-square rounded-circle ms-2">
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
