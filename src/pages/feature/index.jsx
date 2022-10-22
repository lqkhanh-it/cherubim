import React, { useEffect, useState } from "react";
import defaultImage from "../../img/default.jpeg";
import { queryData } from "../../services/firebase";

const Feature = () => {
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
    <div className="container-xxl bg-light my-5 py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Khóa học nổi bật
          </div>
          <h1 className="display-7 mb-3">
            Cherubim có tất cả các khóa học trải dài cho người mới bắt đầu cho
            đến nâng tối đa điểm số
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          {data &&
            data?.length > 0 &&
            data?.map((item) => {
              const {
                name,
                title,
                description,
                total,
                raised,
                image,
                link = "#",
              } = item;
              return (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={item.id}
                >
                  <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                    <div className="text-center p-4 pt-0">
                      <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                        <small>{name}</small>
                      </div>
                      <h5 className="mb-3">{title}</h5>
                      <p>{description}</p>
                      <div className="causes-progress bg-light p-3 pt-2">
                        <div className="d-flex justify-content-between">
                          <p className="text-dark">
                            {total} <small className="text-body">Goal</small>
                          </p>
                          <p className="text-dark">
                            {raised} <small className="text-body">Raised</small>
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
                            <span>{(raised / total) * 100}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="position-relative mt-auto">
                      <img
                        className="img-fluid"
                        src={image || defaultImage}
                        alt=""
                      />
                      <div className="causes-overlay">
                        <a className="btn btn-outline-primary" href={link}>
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
