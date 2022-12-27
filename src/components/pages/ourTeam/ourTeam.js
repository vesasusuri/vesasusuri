import "./styles/ourTeam.scss";
import OurTeamData from "./ourTeamData";
import lineimg from "../../../assets/home/line1.png";

import { FormattedMessage } from "react-intl";

function OurTeam2() {
  return (
    <>
      <p className="digitalSchoolTeachersTeam">
        <FormattedMessage
          id=".digitalSchoolTeachersTeam"
          defaultMessage=".digitalSchoolTeachersTeam"
        />
      </p>{" "}
      <div className="OurTeam">
        {OurTeamData.map((props) => {
          return (
            <div className="ourTeamInsideDiv">
              <div
                className="profile"
                style={{ content: `url(${props.img})` }}
              ></div>
              
              <div className="info">
                <h6 className="name">{props.emri}</h6>
                
                <img src={lineimg} className="pic" />
                <p className="role"><span className="colorpink">.</span>{props.role}<span className="colorpink">()</span></p>
                <button className="buttonclose">.{props.closeBTN}()</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OurTeam2;