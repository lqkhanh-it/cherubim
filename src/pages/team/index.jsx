import React, { useEffect, useState } from "react";
import defaultImage from "../../img/default.jpeg";
import { getData } from "../../services/firebase";

const Team = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      if (!data || data?.length === 0) {
        const tempData = await getData("team");
        setData([...tempData]);
      }
    }
    fetchData();
  }, []);

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
        <div className="row justify-content-around">
          {data &&
            data?.length > 0 &&
            data.map((item) => {
              const { firestoreId, name, highlight, image, descriptions } =
                item;
              return (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={firestoreId}
                >
                  <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid"
                        src={image || defaultImage}
                        alt="Giảng viên IELTS Cherubim"
                      />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>{name}</h5>
                      <p className="text-primary">{highlight}</p>
                    </div>
                    <div className="team-description bg-light text-start p-4">
                      {descriptions &&
                        descriptions?.length > 0 &&
                        descriptions?.map((item) => {
                          return (
                            <p className="text-primary pb-1 m-0" key={item}>
                              - {item}
                            </p>
                          );
                        })}
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
