import React, { useEffect, useState } from "react";
import defaultImage from "../../img/default.jpeg";
import icon from "../../img/logoNoText.png";

const Why = () => {
  return (
    <div className="container-xxl my-5 py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Tại sao nên chọn IELTS Cherubim
          </div>
        </div>
        <div className="row g-4 justify-content-center wow fadeInUp">
          <div className="col col-12 col-md-5">
            <img
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/278793436_139007438675011_9024113649611264826_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5FNf-EXViyQAX8DJ8gS&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAwUbYdplTSOVtFAHmz3oIyggWsrR7h2-eb5_7b-t3Meg&oe=63738F37"
              alt="class cherubim"
              width={"100%"}
            />
          </div>
          <div className="col col-12 col-md-7">
            <ul className="listWhy">
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                100% giáo viên đạt 8.0 - 8.5/9.0
              </li>
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                Lớp học size nhỏ [Tối đa 10 học viên]
              </li>
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                Giáo viên theo sát tiến trình rèn luyện của học viên
              </li>
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                Điểm của học viên luôn cao [7.0+]
              </li>
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                Hoàn 100% học phí trong tuần đầu tiên nếu học viên không hài
                lòng
              </li>
              <li>
                <img
                  src={icon}
                  width="20"
                  className="mx-3"
                  alt="cherubim icon"
                />
                Học lại miễn phí nếu không đạt mục tiêu [Liên hệ bộ phận tuyển
                sinh để biết thêm chi tiết]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
