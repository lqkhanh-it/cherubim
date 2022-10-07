import React from "react";
import Dashboard from "./pages/dashboard";
import BackTop from "./components/backtop";
import Header from "./pages/header/index";
import Footer from "./pages/footer/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;
