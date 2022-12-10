import React from "react";
import { CompanyData1, CompanyData2 } from "./data";
import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import about from "../../../../assets/nav/about.png"
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
            id="intro-video"
            defaultMessage="INTRODUCTION VIDEO"
          />
        </h5>

        <img src={about} className="img-about-us"/>
        {/* {CompanyData2.map((props) => {
                    return(
                        <div className="item" key={props.id}>
                            <h6>{props.category}</h6>
                            <div className="links2">
                                {props.links.map((l) => {
                                    return(
                                        <Link to={l.to} key={l.id}>
                                            {l.link}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })} */}
      </div>
    </div>
  );
};

export default CompanyMenu;
