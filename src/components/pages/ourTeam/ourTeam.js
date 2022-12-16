import "./styles/ourTeam.scss";
import OurTeamData from "./ourTeamData";

import { FormattedMessage } from "react-intl";
function OurTeam2() {
  return (
    <>
      {/* <div className="banner1-background" alt="banner"></div> */}
        <p><FormattedMessage id=".digitalSchoolTeachersTeam" defaultMessage=".digitalSchoolTeachersTeam"/></p>
      <div className="BannerText">
        <div> 
          {OurTeamData.map((props) => {
            return (
              <div className="ourTeamInsideDiv">
                
                <h1 className="name">{props.emri}</h1>
                <p className="role">{props.role}</p>
                <p className="skils">{props.skills}</p>
                <p className="p1">{props.tags}</p>
                <p className="p2">{props.tags1}</p>
                <p className="p3">{props.tags2}</p>
                <p className="p4">{props.tags3}</p>
                <p className="p5">{props.tags4}</p>
                <p className="p6">{props.tags04}</p>
                <p className="p7">{props.tags5}</p>
                <p className="p8">{props.tags6}</p>
                <p className="p9">{props.tags7}</p>
                <p className="p10">{props.tags8}</p>
                <p className="p10">{props.tags9}</p>
                <p className="p10">{props.tags10}</p>
                <div className="divBtn">
                  {props.closeBTN}
                  {props.closeBTN1}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
}

export default OurTeam2
