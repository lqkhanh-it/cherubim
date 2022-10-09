import React, { useState, useEffect } from "react";
import defaultImage from "../../img/default.jpeg";
import { getData } from "../../services/firebase";

const Banner = () => {
  const [data, setData] = useState();
  const [textColor, setTextColor] = useState("text-primary");
  useEffect(() => {
    async function fetchData() {
      if (!data || data?.length === 0) {
        const tempData = await getData("banner");
        setData([...tempData]);
        if (tempData[0]?.theme === "light") {
          setTextColor("text-white");
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (data?.length > 0 && data[0]?.theme === "light") {
      setTextColor("text-white");
    }
  }, [data]);

  const heightConfig = { maxHeight: "100vh", minHeight: "100vh" };

  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={heightConfig}>
          {data &&
            data.length > 0 &&
            data.map((item, key) => {
              const { title, description, image, link, float } = item;
              return (
                <div
                  className={`carousel-item ${key === 0 ? "active" : ""}`}
                  key={item?.id}
                  style={heightConfig}
                >
                  <img
                    className="w-100 h-100"
                    src={image || defaultImage}
                    alt="Cherubim ưu đãi"
                  />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className={`row justify-content-${float}`}>
                        <div className={`col-lg-7 pt-2 text-${float}`}>
                          <h1
                            className={`display-4 ${textColor} mb-2 animated slideInDown`}
                          >
                            {title}
                          </h1>
                          <p
                            className={`fs-5 ${textColor} mb-3 animated slideInDown`}
                          >
                            {description}
                          </p>
                          <a
                            className="btn btn-cherubim py-2 px-3 animated slideInDown"
                            href={link}
                          >
                            Cùng đi nào
                            <div className="d-inline-flex btn-sm-square bg-white text-cherubim rounded-circle ms-2">
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
        {data && data?.length > 1 && (
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
        )}
        {data && data?.length > 1 && (
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
        )}
      </div>
    </div>
  );
};

export default Banner;
