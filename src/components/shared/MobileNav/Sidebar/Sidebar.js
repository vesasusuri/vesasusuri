import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { CgClose } from "react-icons/cg";
import { MdApps, MdKeyboardArrowDown } from "react-icons/md";
import { BiSliderAlt, BiCategoryAlt, BiBold, BiCart } from "react-icons/bi";

import { Activities, CompanyData2 } from "../../Nav/Megamenus/data";
// import { PanelData } from '../../Navbar/CoursesMenu/data';

const Sidebar = (props) => {
  const [list3, showList3] = useState(false);
  const [list4, showList4] = useState(false);

  function show3() {
    showList3(!list3);
  }
  function show4() {
    showList4(!list4);
  }
  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="shared-logo"></div>
          Digi Lab
        </Link>
        <button onClick={props.click}>
          <CgClose />
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link">
            <Link to="/" className="nav-anchor">
              <BiSliderAlt />
              <FormattedMessage id="courses" defaultMessage=".home()" />
            </Link>
          </div>
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link">
            <Link to="/ourTeam" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage id="About" defaultMessage=".ourTeam()" />
            </Link>
          </div>
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link">
            <Link to="/Solutions" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage id="solutions" defaultMessage=".aboutUs()" />
            </Link>
          </div>
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show3}>
            <Link to="/" className="nav-anchor">
              <BiBold />
              <FormattedMessage id="projects" defaultMessage=".projects()" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list3 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {CompanyData2.map((props) => {
                  return <Link to={props.to}>{props.category}</Link>;
                })}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show4}>
            <Link to="/" className="nav-anchor">
              <BiCategoryAlt />
              <FormattedMessage
                id="activities"
                defaultMessage=".activities()"
              />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list4 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {Activities.map((props) => {
                  return <Link to={props.to}>{props.category}</Link>;
                })}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-auth">
          <Link to="/Login" className="link1">
            <FormattedMessage id="log-in" defaultMessage=".logIn()" />
          </Link>
          <Link to="/Signup" className="link2">
            <FormattedMessage id="sign-up" defaultMessage=".signUp()" />
          </Link>
        </div>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
