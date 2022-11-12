import React, { useEffect, useState } from "react";
import defaultImage from "../../img/default.jpeg";
import { getData } from "../../services/firebase";

const Team = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      if (!data || data?.length === 0) {
        const tempData = await getData("team");
        setData([...tempData]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Đội ngũ giáo viên
          </div>
          <p className="mb-5">
            Đội ngũ Giáo Viên giỏi, chuyên nghiệp và nhiều kinh nghiệm, 100% đạt
            IELTS 8.0 trở lên. Hầu hết các thầy đều xuất thân từ trường chuyên
            hoặc khối lớp chuyên Anh, có giải cao trong kì thi Olympic 30/4, kì
            thi Tiếng Anh cho Học Sinh Giỏi thành phố và quốc gia khi còn là học
            sinh cấp 3. Riêng có thầy Sang - Academic Manager còn đạt thêm ECPE
            Michigan Proficiency CEFR C2 [2010] - giá trị vĩnh viễn.
          </p>
        </div>
        <div className="row justify-content-around">
          {data &&
            data?.length > 0 &&
            data.map((item) => {
              const { firestoreId, name, highlight, image, descriptions } =
                item;
              return (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={firestoreId}
                >
                  <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid"
                        src={image || defaultImage}
                        alt="Giảng viên IELTS Cherubim"
                        style={{ width: "100%", height: 390 }}
                        height="390"
                      />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5>{name}</h5>
                      <p className="text-primary">{highlight}</p>
                    </div>
                    <div className="team-description bg-light text-start p-4">
                      {descriptions &&
                        descriptions?.length > 0 &&
                        descriptions?.map((item) => {
                          return (
                            <p className="text-primary pb-1 m-0" key={item}>
                              - {item}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="d-inline-block bg-danger text-primary py-1 px-3 mt-5">
          Chỉ có tại Cherubim
        </div>
        <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4 mt-3">
          <span className="text-primary">Đội ngũ Tutor [trợ giảng]</span>
          <p className="text-dark mt-2">
            Nhiệm vụ của các Tutor tại IELTS Cherubim là đồng hành cùng bạn ôn
            tập kiến thức , làm bài tập về nhà và trợ giúp bạn hoàn thành các
            bài tập khác thầy cô giao trên lớp. Tutor sẽ là người bạn thân
            thiết, hỗ trợ hết sức để bạn bước tiếp khi cảm thấy mệt mỏi hoặc
            chán nản trong hành trình gian nan này. Họ là những chiến binh rất
            đặc biệt mà Cherubim đã mạnh tay mời về, nhằm đảm bảo bạn có được
            môi trường học tập và trau dồi tốt nhất. Với Cherubim, chất lượng
            giáo dục luôn được xem trọng hơn cả.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
