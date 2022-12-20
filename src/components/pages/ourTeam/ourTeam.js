import "./styles/ourTeam.scss";
import OurTeamData from "./ourTeamData";

import { FormattedMessage } from "react-intl";

function OurTeam2() {
  return (
    <>
      <p className="digitalSchoolTeachersTeam">
        <FormattedMessage
          id=".digitalSchoolTeachersTeam"
          defaultMessage=".digitalSchoolTeachersTeam"
        />
      </p>      <div className="OurTeam">
        {OurTeamData.map((props) => {
          return (
            <div className="ourTeamInsideDiv">
              <div
                className="profile"
                style={{ content: `url(${props.img})` }}
              ></div>
              <div className="top">
                <div className="comment">
                  <div className="comment">Hi there</div>
                  <span>Vesa</span>
                  <div className="button">Read More</div>
                </div>
              </div>
              <div className="info">
                <h6 className="name">{props.emri}</h6>
                <p className="role">{props.role}</p>
                {props.closeBTN}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OurTeam2;
