import React from "react";
import "./styles/aboutUs.scss";
import AboutUsData from "./bannerAboutUsData"
const AboutUs1 = () => {
  return (
    <div className="shared-automation-tools flex-box">
      <div className="items">
        <div className="img"></div>
      </div>
      <div>
        {AboutUsData.map((l) => {
          return (
            <div className="wordsAboutUS">
                <p className="bannerAboutUsText">{l.h1AboutUsbanner}</p>
                <br></br>
                <p>{l.pAboutUsbanner}</p>
                <br></br>
                <p>{l.p2AboutUsbanner}</p>
                <br></br>
                <p>{l.p3AboutUsbanner}</p>
                <br></br>
                <p>{l.p4AboutUsbanner}</p>
                <br></br>
                <p>{l.p5AboutUsbanner}</p>
                <p>{l.p6AboutUsbanner}</p> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs1;
