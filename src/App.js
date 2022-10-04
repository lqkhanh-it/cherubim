import React from "react";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Testimonial from "./pages/testimonial";
import BackTop from "./components/backtop";
import Header from "./pages/header/index";
import Footer from "./pages/footer/index";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/testimonial" component={Testimonial} />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
