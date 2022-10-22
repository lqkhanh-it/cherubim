import React from "react";
import Modal from "react-modal";
import RegisterForm from "./registerForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px 50px",
  },
};
Modal.setAppElement("#root");

const ModelForm = ({ modalProps }) => {
  const { closeModal, modalIsOpen } = modalProps;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Đăng kí tư vấn</h2>
        <p>Cùng IELTS Cherubim bước vào hành trình mới nhé!!!</p>
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default ModelForm;
