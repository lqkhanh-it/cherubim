import React from "react";
import Banner from "../banner";
import About from "../about";
import Feature from "./../feature";
import Team from "./../team/index";
import Testimonial from "./../testimonial/index";
import Why from "./../why/index";

const Dashboard = ({ modalProps }) => {
  return (
    <>
      <Banner />
      <About />
      <Feature modalProps={modalProps} />
      <Why />
      <Team />
      <Testimonial />
    </>
  );
};

export default Dashboard;
