import "./styles/ourTeam.scss";
import DrejtusitData from "./drejtusitTeamData";
import lineimg from "../../../assets/home/line1.png";
import { FormattedMessage } from "react-intl";

function DrejtuesitTeam() {
  return (
    <>
      <p className="digitalSchoolTeachersTeam">
        <FormattedMessage
          id=".digitalSchoolDrejtuesitTeam"
          defaultMessage=".digitalSchoolDrejtuesitTeam"
        />
      </p>
      <div className="OurTeam">
        {DrejtusitData.map((props) => {
          return (
            <div className="ourTeamInsideDiv">
              <div
                className="profile"
                style={{ content: `url(${props.img})` }}
              ></div>

              <div className="info">
                <h6 className="name">{props.emri}</h6>
                <img src={lineimg} className="pic" />
                <p className="role">
                  <span className="colorpink">.</span>
                  {props.role}
                  <span className="colorpink">()</span>
                </p>
                <button className="buttonclose">.{props.closeBTN}()</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DrejtuesitTeam;
