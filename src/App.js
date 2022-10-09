import React, { useState } from "react";
import Dashboard from "./pages/dashboard";
import BackTop from "./components/backtop";
import ModalForm from "./components/modelForm";
import Header from "./pages/header/index";
import Footer from "./pages/footer/index";

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
      <Header modalProps={modalProps} />
      <Dashboard />
      <Footer />
      <BackTop />
      <ModalForm modalProps={modalProps} />
    </div>
  );
}

export default App;
