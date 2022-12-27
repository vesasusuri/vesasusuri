// import "./styles/banner1.scss";
// import telBanner from "../../../assets/home/telBanner.png";
// import Data from "./bannerData";
// function Banner1() {
//   return (
//     <>
//       <div className="banner1-background" alt="banner"></div>
//       <div className="BannerText">
//           {Data.map((props) => {
//             return (
//               <div className="">
//                 <h1 className="h1">{props.h1banner1digilab}</h1>
//                 <p className="p1">{props.pbannerdigilab}</p>
//                 <div className="divBtn">
//                   {props.btnbanner1digilab}
//                   {props.btnbanner2digilab}
//                 </div>
//               </div>
//             );
//           })}
//         <img src={telBanner} className="imgbanner" alt="Phone Banner"/>
//       </div>
//     </>

//   );
// }
// export default Banner1;

import React from "react";
import "./styles/banner1.scss";
import Data from "./bannerData";

const Banner1 = () => {
  return (
    <>
    <div className="ad-exchange2"></div>
    <div className="ad-exchange">
      <div className="main">
        <div className="flex-box row">
        {Data.map((props) => {
            return (
              <div className="divText">
                <h1 className="h1">{props.h1banner1digilab}</h1>
                <p className="p1">{props.pbannerdigilab}</p>
                <div className="divBtn">
                  {props.btnbanner1digilab}
                  {props.btnbanner2digilab}
                </div>
              </div>
            );
          })}
          <div className="img-container">
            <div className="img" data-aos="flip-left"></div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default Banner1;
