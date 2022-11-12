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
  const bannerConfig = (link) => {
    return {
      display: "inline-block",
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${link})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };
  };
  const borderText = {
    border: "1px solid",
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "6px",
    backgroundColor: "#5f041642",
  };
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ zIndex: 0 }}
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
                  <div style={bannerConfig(image || defaultImage)}></div>

                  <div className="carousel-caption">
                    <div className="container">
                      <div className={`row justify-content-${float}`}>
                        <div className={`col-lg-7 pt-2 text-${float}`}>
                          <h1
                            style={{ fontFamily: "futura", fontWeight: "500" }}
                            className={`display-4 ${textColor} mb-4 animated slideInDown`}
                          >
                            {title}
                          </h1>
                          <p
                            className={`fs-5 ${textColor} mb-3 animated slideInDown text-cherubim-yellow`}
                            style={borderText}
                          >
                            {description}
                          </p>
                          <a
                            className="btn btn-cherubim py-2 px-3 animated slideInDown bg-cherubim-50"
                            href={link}
                          >
                            Join us
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
