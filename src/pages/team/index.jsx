import React from "react";
import defaultImage from "../../img/default.jpeg";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "Mr. Sang Vo",
      description: [
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall",
        "IELTS 8.5 overall",
      ],
      highlight: "IELTS 8.5 overall",
      image:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/307985952_598529305297869_9017569503134287725_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-n77dDoRCNUAX-zj2b0&tn=zCCYt8rYpvP7t-K9&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIPtgyqT0jgTMTpZ1Cid3ahTCk8nlzZLI1QBkyGKUKJOQ&oe=6368FFF0",
    },
    {
      id: 1,
      name: "Mr. Sang Vo",
      description: [
        "IELTS 8.5 overall",
        "IELTS 8.5 overall",
        "IELTS 8.5 overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
      ],
      highlight: "IELTS 8.5 overall",
      image:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/307985952_598529305297869_9017569503134287725_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-n77dDoRCNUAX-zj2b0&tn=zCCYt8rYpvP7t-K9&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIPtgyqT0jgTMTpZ1Cid3ahTCk8nlzZLI1QBkyGKUKJOQ&oe=6368FFF0",
    },
    {
      id: 1,
      name: "Mr. Sang Vo",
      description: [
        "IELTS 8.5 overall",
        "IELTS 8.5 overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall overall overall",
        "IELTS 8.5 overall",
      ],
      highlight: "IELTS 8.5 overall",
      image:
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/307985952_598529305297869_9017569503134287725_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-n77dDoRCNUAX-zj2b0&tn=zCCYt8rYpvP7t-K9&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVIPtgyqT0jgTMTpZ1Cid3ahTCk8nlzZLI1QBkyGKUKJOQ&oe=6368FFF0",
    },
  ];
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
              const { id, name, highlight, image, description } = item;
              return (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={id}
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
                      {description &&
                        description?.length > 0 &&
                        description?.map((item) => {
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
