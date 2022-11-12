import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, desc, image, point, link } = testiMonialDetail;

  return (
    <div className="testimonial-item text-center">
      <img
        className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
        src={image}
        style={{ width: "100px", height: "100px" }}
        alt="a"
      />
      <div className="testimonial-text rounded text-center p-4">
        <p>{desc}</p>
        <h5 className="mb-1">{name}</h5>
        <b className="fst-italic">{point}</b>
        <br />
        <a href={link} target="_blank" rel="noreferrer">
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
