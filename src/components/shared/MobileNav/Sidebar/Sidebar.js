import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { CgClose } from "react-icons/cg";
import { MdApps, MdKeyboardArrowDown } from "react-icons/md";
import { BiSliderAlt, BiCategoryAlt, BiBold, BiCart } from "react-icons/bi";

import { ResourcesData1, CompanyData2 } from "../../Nav/Megamenus/data";
// import { PanelData } from '../../Navbar/CoursesMenu/data';

const Sidebar = (props) => {
  const [list, showList] = useState(false);
  const [list2, showList2] = useState(false);
  const [list3, showList3] = useState(false);
  const [list4, showList4] = useState(false);
  const [list5, showList5] = useState(false);
  function show() {
    showList(!list);
  }
  function show2() {
    showList2(!list2);
  }
  function show3() {
    showList3(!list3);
  }
  function show4() {
    showList4(!list4);
  }
  function show5() {
    showList5(!list5);
  }
  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="shared-logo"></div>
          Pay2Gate
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show}>
            <Link to="/" className="nav-anchor">
              <BiSliderAlt />
              <FormattedMessage id="courses" defaultMessage="Products" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {ResourcesData1.map((props) => {
                  return (
                    <div className="category">
                      {props.items ? (
                        <>
                          <h6>{props.name}</h6>
                          <div className="inner-links2">
                            {props.items.map((l) => {
                              return <Link to={l.to}>{l.link}</Link>;
                            })}
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show2}>
            <Link to="/About" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage id="About" defaultMessage="About" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list2 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {CompanyData2.map((props) => {
                  return <Link to={props.to}>{props.link}</Link>;
                })}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show3}>
            <Link to="/Solutions" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage id="solutions" defaultMessage="Solutions" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list3 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {CompanyData2.map((props) => {
                  return <Link to={props.to}>{props.link}</Link>;
                })}
              </div>
            </div>
          )}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/Pricing" className="nav-anchor">
            <BiBold />
            <FormattedMessage id="pricing" defaultMessage="Pricing" />
          </Link>
        </div>
        
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show4}>
            <Link to="/Resources" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage id="Resources" defaultMessage="Resources" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list4 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {CompanyData2.map((props) => {
                  return <Link to={props.to}>{props.link}</Link>;
                })}
              </div>
            </div>
          )}
        </div>
        
        <div className="nav-sidebar-link">
          <Link to="/contact" className="nav-anchor">
            <BiBold />
            <FormattedMessage id="contact" defaultMessage="Contact" />
          </Link>
        </div>

        <div className="sidebar-auth">
        <Link to="/Login" className="link1">
          <FormattedMessage id="log-in" defaultMessage="Log In" />
        </Link>
        <Link to="/Signup" className="link2">
          <FormattedMessage id="sign-up" defaultMessage="Sign Up" />
        </Link>
      </div>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
