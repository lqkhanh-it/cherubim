import React from "react";
import "../../index.css";

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0523921111408!2d106.69059951531635!3d10.807299361577043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d1f08577bf%3A0x6aa721b6483651f0!2zNS8xMDkvOE4gTsahIFRyYW5nIExvbmcsIFBoxrDhu51uZyA3LCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1665808902199!5m2!1svi!2s"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
