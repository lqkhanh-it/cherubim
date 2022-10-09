import React from "react";
import Modal from "react-modal";

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
        <h2>Đăng kí làm bài test năng lực</h2>

        <div>
          <div class="form-group py-2">
            <label for="fullName">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div class="form-group py-2">
            <label for="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              placeholder="Nhập số điện thoại để Cherubim có thể liên hệ nhé"
            />
          </div>
          <div class="form-group py-2">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Tiếp theo là email nè"
            />
          </div>
          <div class="form-group">
            <label for="courses">
              Cuối cùng là khóa học mà bạn quan tâm nè
            </label>
            <select class="form-control" id="courses">
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
              <option>Level 4</option>
              <option>Level 5</option>
              <option>Level 6</option>
            </select>
            <small class="form-text text-muted">
              Xem thêm về các khóa học <a href="#"> tại đây</a>
            </small>
          </div>
          <div class="form-group mt-2">
            <small class="form-text text-muted">
              Toàn bộ thông tin của bạn đều được bảo mật theo tiêu chuẩn của
              Google
            </small>
          </div>
          <div class="form-group mt-2" style={{ float: "right" }}>
            <button class="btn btn-cherubim mx-2">Đóng</button>
            <button class="btn btn-primary">Đăng ký</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModelForm;
