import React from "react";

const BackTop = () => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      onClick={backToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </div>
  );
};

export default BackTop;
