import React, { useState } from "react";
import Dashboard from "./pages/dashboard";
import BackTop from "./components/backtop";
import ModalForm from "./components/modelForm";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Contact from "./pages/contact";
import Courses from "./pages/course/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalProps = {
    modalIsOpen: modalIsOpen,
    closeModal: closeModal,
    openModal: openModal,
  };

  return (
    <div className="App">
      <Router>
        <Header modalProps={modalProps} />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackTop />
        <ModalForm modalProps={modalProps} />
      </Router>
    </div>
  );
}

export default App;
