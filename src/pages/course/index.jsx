import React, { useState, useEffect } from "react";
import defaultImage from "../../img/default.jpeg";
import bg from "../../img/contact.jpg";
import BannerV2 from "../../components/bannerV2";
import { queryData } from "../../services/firebase";

const Courses = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      if (!data || data?.length === 0) {
        const tempData = await queryData(
          "highlightCources",
          "isHighlight",
          "==",
          true
        );
        setData([...tempData]);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <BannerV2 bannerImage={bg} position={"0px"} title={"Khóa học"} />

      <div className="container-xxl my-3">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h2 className="display-7 mb-3">
              Cherubim có tất cả các khóa học trải dài cho người mới bắt đầu cho
              đến nâng tối đa điểm số
            </h2>
          </div>
          {data &&
            data.length > 0 &&
            data.map((item) => {
              const {
                image,
                description,
                link,
                shortDescription,
                title,
                firestoreId,
              } = item;
              return (
                <div className="row g-5 py-4" key={firestoreId}>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div
                      className="position-relative overflow-hidden h-100"
                      style={{ minHeight: "400px" }}
                    >
                      <img
                        className="position-absolute w-100 h-100 pt-5 pe-5"
                        src={image || defaultImage}
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                      <h1 className="display-6 mb-5">{title}</h1>
                      <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                        <p className="text-dark mb-2">{shortDescription}</p>
                      </div>
                      <p className="mb-5">{description}</p>
                      <a className="btn btn-primary py-2 px-3 me-3" href={link}>
                        Đăng kí ngay
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
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

export default Courses;
