import React from "react";
import Banner from "../banner";
import About from "../about";
import Feature from "./../feature";
import Team from "./../team/index";
import Testimonial from "./../testimonial/index";

const Dashboard = () => {
  return (
    <>
      <Banner />
      <About />
      <Feature />
      <Team />
      <Testimonial />
    </>
  );
};

export default Dashboard;
