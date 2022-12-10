import "./styles/banner1.scss";
import telBanner from "../../../assets/home/telBanner.png";
import Data from "./bannerData";
function Banner1() {
  return (
    <>
      <div className="banner1-background" alt="banner"></div>
      <div className="BannerText">
        <div>
          {Data.map((props) => {
            return (
              <div className="">
                <h1 className="h1">{props.h1banner1digilab}</h1>
                <p className="p1">{props.pbannerdigilab}</p>
                <div className="divBtn">
                  {props.btnbanner1digilab}
                  {props.btnbanner2digilab}
                </div>
              </div>
            );
          })}
        </div>
        <img src={telBanner} className="imgbanner" alt="Phone Banner"/>
      </div>
    </>
  );
}

export default Banner1;
