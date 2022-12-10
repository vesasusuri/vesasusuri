import React from "react";
import { ResourcesData1 } from "./data";
import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import resources from "../../../../assets/nav/resources.png"
const ResourcesMenu = () => {
  return (
    <div className="bottom-nav-megamenu company-megamenu">
      <div className="left-links">
        {ResourcesData1.map((props) => {
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
                        <div className="icon-container centered-item">
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
              <div className="div-centered-item2">
                <Link to={props.to1} className="centered-item1">
                  <FormattedMessage id="view-all" defaultMessage="View-all" />
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="other-links">
        <h5>
          <FormattedMessage
            id="TIPS-&-TRICKS"
            defaultMessage="TIPS & TRICKS"
          />
        </h5>

        <img src={resources} className="img-about-us" />

      </div>
    </div>
  );
};

export default ResourcesMenu;
