import React from "react";
import TestiMonialsDetails from "../../components/TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  const data = [
    {
      id: "1",
      name: "MINH PHƯƠNG",
      desc: "Bé Phương đang theo học tại trường THPT chuyên Lê Hồng Phong nên đã được các thầy cô truyền cho bạn một nền tảng vững chắc... và chỉ vỏn vẹn ôn thi 2 tháng với nỗ lực không ngừng và đã xuất sắc giật về con điểm 7.5 overall khi mới 17 tuổi",
      point: "IELTS 7.5",
      image:
        "https://i.pinimg.com/736x/db/60/48/db60480c938882c42c270417131886da.jpg",
      link: "https://www.facebook.com/ielts.cherubim/posts/pfbid037YsusVYeNGBspAgWtNFmjV18hxSiADk76EB6Ttth5kDTCFVqdHae1JT1T94qni6Yl",
    },
    {
      id: "2",
      name: "MINH PHƯƠNG",
      desc: "Bé Phương đang theo học tại trường THPT chuyên Lê Hồng Phong nên đã được các thầy cô truyền cho bạn một nền tảng vững chắc... và chỉ vỏn vẹn ôn thi 2 tháng với nỗ lực không ngừng và đã xuất sắc giật về con điểm 7.5 overall khi mới 17 tuổi",
      point: "IELTS 7.5",
      image:
        "https://i.pinimg.com/736x/db/60/48/db60480c938882c42c270417131886da.jpg",
      link: "https://www.facebook.com/ielts.cherubim/posts/pfbid037YsusVYeNGBspAgWtNFmjV18hxSiADk76EB6Ttth5kDTCFVqdHae1JT1T94qni6Yl",
    },
    {
      id: "3",
      name: "MINH PHƯƠNG",
      desc: "Bé Phương đang theo học tại trường THPT chuyên Lê Hồng Phong nên đã được các thầy cô truyền cho bạn một nền tảng vững chắc... và chỉ vỏn vẹn ôn thi 2 tháng với nỗ lực không ngừng và đã xuất sắc giật về con điểm 7.5 overall khi mới 17 tuổi",
      point: "IELTS 7.5",
      image:
        "https://i.pinimg.com/736x/db/60/48/db60480c938882c42c270417131886da.jpg",
      link: "https://www.facebook.com/ielts.cherubim/posts/pfbid037YsusVYeNGBspAgWtNFmjV18hxSiADk76EB6Ttth5kDTCFVqdHae1JT1T94qni6Yl",
    },
    {
      id: "4",
      name: "MINH PHƯƠNG",
      desc: "Bé Phương đang theo học tại trường THPT chuyên Lê Hồng Phong nên đã được các thầy cô truyền cho bạn một nền tảng vững chắc... và chỉ vỏn vẹn ôn thi 2 tháng với nỗ lực không ngừng và đã xuất sắc giật về con điểm 7.5 overall khi mới 17 tuổi",
      point: "IELTS 7.5",
      image:
        "https://i.pinimg.com/736x/db/60/48/db60480c938882c42c270417131886da.jpg",
      link: "https://www.facebook.com/ielts.cherubim/posts/pfbid037YsusVYeNGBspAgWtNFmjV18hxSiADk76EB6Ttth5kDTCFVqdHae1JT1T94qni6Yl",
    },
    {
      id: "5",
      name: "MINH PHƯƠNG",
      desc: "Bé Phương đang theo học tại trường THPT chuyên Lê Hồng Phong nên đã được các thầy cô truyền cho bạn một nền tảng vững chắc... và chỉ vỏn vẹn ôn thi 2 tháng với nỗ lực không ngừng và đã xuất sắc giật về con điểm 7.5 overall khi mới 17 tuổi",
      point: "IELTS 7.5",
      image:
        "https://i.pinimg.com/736x/db/60/48/db60480c938882c42c270417131886da.jpg",
      link: "https://www.facebook.com/ielts.cherubim/posts/pfbid037YsusVYeNGBspAgWtNFmjV18hxSiADk76EB6Ttth5kDTCFVqdHae1JT1T94qni6Yl",
    },
  ];

  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-xxl py-5">
      <div className="container position-relative">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Học viên tiêu biểu
          </div>
          <h2 className="display-6 mb-5">
            Trusted By Thousands Of People And Nonprofits
          </h2>
        </div>
        <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}
        >
          {data.map((item) => {
            return (
              <TestiMonialsDetails testiMonialDetail={item} key={item.id} />
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
