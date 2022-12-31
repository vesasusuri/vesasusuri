import React from "react";
import { CompanyData1 } from "./data";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import cino from "../../../../assets/shared/2.jpg"
const CompanyMenu = () => {
  return (
    <div className="bottom-nav-megamenu company-megamenu">
      <div className="left-links">
        {CompanyData1.map((props) => {
          return (
            <div
              className={`category ${props.categoryId}`}
              key={props.categoryId}>
              <div>
                <h5>{props.category}</h5>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link to={l.to} className="megamenu-link">
                        <div className="icon-container">
                          <div
                            className="icon"
                            style={{ content: `url(${l.icon})` }}></div>
                        </div>
                        <div className="block">
                          <h6>{l.title}</h6>
                          {l.text ? <p>{l.text}</p> : null}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="other-links">
        <h5>
          <FormattedMessage
            id="cino-pic"
            defaultMessage="Photos from random activities"
          />
        </h5>

        <img src={cino} className="img-about-us"/>
      </div>
    </div>
  );
};

export default CompanyMenu;
