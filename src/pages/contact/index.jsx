import React from "react";
import BannerV2 from "../../components/bannerV2";
import bg from "../../img/contact.jpg";
import ContactBody from "../../components/Contact/ContactBody";
import GetInTouch from "../../components/Contact/GetInTouch";

const Contact = () => {
  return (
    <div className="Contact">
      <BannerV2 bannerImage={bg} position={"0px"} title={"Liên hệ"} />
      <ContactBody />
      <GetInTouch />
    </div>
  );
};
export default Contact;
