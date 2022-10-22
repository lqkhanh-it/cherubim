import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <div className="form-group py-2">
        <label htmlFor="fullName">Họ và tên</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Nhập họ và tên của bạn"
        />
      </div>
      <div className="form-group py-2">
        <label htmlFor="phoneNumber">Số điện thoại</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          placeholder="Nhập số điện thoại để Cherubim có thể liên hệ nhé"
        />
      </div>
      <div className="form-group py-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Tiếp theo là email nè"
        />
      </div>
      <div className="form-group">
        <label htmlFor="courses">
          Cuối cùng là khóa học mà bạn quan tâm nè
        </label>
        <select className="form-control" id="courses">
          <option>Level 1</option>
          <option>Level 2</option>
          <option>Level 3</option>
          <option>Level 4</option>
          <option>Level 5</option>
          <option>Level 6</option>
        </select>
        <small className="form-text text-muted">
          Xem thêm về các khóa học <a href="/courses"> tại đây</a>
        </small>
      </div>
      <div className="form-group mt-2">
        <small className="form-text text-muted">
          Toàn bộ thông tin của bạn đều được bảo mật theo tiêu chuẩn của Google
        </small>
      </div>
      <div className="form-group mt-2" style={{ float: "right" }}>
        <button className="btn btn-primary">Đăng ký</button>
      </div>
    </div>
  );
};

export default RegisterForm;
