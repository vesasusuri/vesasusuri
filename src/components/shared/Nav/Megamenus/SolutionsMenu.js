import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { SolutionData1} from "./data";

const SolutionsMenu = () => {
  return (
    <div className="bottom-nav-megamenu solutions-megamenu">
      <div className="left-links">
        {SolutionData1.map((props) => {
          return (
            <div
              className={`category ${props.categoryId}`}
              key={props.categoryId}>
              <div>
                <h5>{props.category}</h5>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link to={l.to} key={l.id} className="megamenu-link">
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
              <div className="div-centered-item3">
                <Link to={props.to1} className="centered-item1">
                  <FormattedMessage id="view-all" defaultMessage="View-all" />
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="slider-container">
       <Carousel className="slider" itemsToShow={1}>
          {SolutionData2.map((props) => {
            return (
              <div className="slider-item" key={props.id}>
                <div className="logo"></div>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
              </div>
            );
          })}
        </Carousel> 
        <Link to="/">
          <FormattedMessage id="learn-more" defaultMessage="Learn more" />
        </Link>
      </div> */}
    </div>
  );
};

export default SolutionsMenu;
