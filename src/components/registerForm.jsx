import React, { useState, useEffect } from "react";
import { registerInformation } from "../services/firebase";

const RegisterForm = ({ onRequestClose }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState("hoc-sinh");
  const [why, setWhy] = useState("du-hoc");
  const [course, setCourse] = useState("lv3");
  const [done, setDone] = useState(false);

  useEffect(() => {
    resetFields();
    setDone(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      phone,
      email,
      type: about,
      reason: why,
      level: course,
    };
    registerInformation(payload)
      .then((res) => {
        resetFields();
        setDone(true);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const resetFields = () => {
    setName();
    setPhone();
    setEmail();
    setAbout("hoc-sinh");
    setWhy("du-hoc");
    setCourse("lv-3");
  };

  return (
    <div>
      {done ? (
        <div>
          <div class="alert alert-success" role="alert">
            Hoàn tất! Cherubim đã nhận được thông tin và sẽ liên hệ lại bạn
            trong 24h nhé
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setDone(false);
                if (onRequestClose) onRequestClose();
              }}
            >
              Hoàn tất
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group py-2">
            <label htmlFor="fullName">Họ và tên</label>
            <input
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              required={true}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Nhập số điện thoại để Cherubim có thể liên hệ nhé"
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="email">Email</label>
            <input
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Tiếp theo là email nè"
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="about">Bạn là?</label>
            <select
              className="form-control"
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            >
              <option value="hoc-sinh">Học sinh cấp 2, 3</option>
              <option value="sinh-vien-12">Sinh viên năm 1, 2</option>
              <option value="sinh-vien-34">Sinh viên năm 3, 4</option>
              <option value="di-lam-1">{`Người đi làm < 1 năm`}</option>
              <option value="di-lam-2">{`Người đi làm lớn hơn 1 năm`}</option>
            </select>
          </div>
          <div className="form-group py-2">
            <label htmlFor="why">Mục đích học tiếng Anh của bạn?</label>
            <select
              className="form-control"
              id="why"
              value={why}
              onChange={(e) => setWhy(e.target.value)}
            >
              <option value="du-hoc">Du học</option>
              <option value="di-lam">Tìm kiếm cơ hội việc làm tốt hơn</option>
              <option value="ra-truong">Cần để ra trường</option>
              <option value="dinh-cu">Định cư - làm việc tại nước ngoài</option>
            </select>
          </div>
          <div className="form-group pt-2">
            <label htmlFor="course">
              Cuối cùng là khóa học mà bạn quan tâm nè
            </label>
            <select
              className="form-control"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="lv1">Level 1</option>
              <option value="lv2">Level 2</option>
              <option value="lv3">Level 3</option>
              <option value="lv4">Level 4</option>
              <option value="lv5">Level 5</option>
              <option value="lv6">Level 6</option>
            </select>
            <small className="form-text text-muted">
              Xem thêm về các khóa học <a href="/courses"> tại đây</a>
            </small>
          </div>
          <div className="form-group mt-2">
            <small className="form-text text-muted">
              Toàn bộ thông tin của bạn đều được bảo mật theo tiêu chuẩn của
              Google
            </small>
          </div>
          <div className="form-group mt-2" style={{ float: "right" }}>
            <button type="submit" value="Submit" className="btn btn-primary">
              Đăng ký
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
