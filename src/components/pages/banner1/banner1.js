import Data from "./bannerData";
import $ from 'jquery'
import React from "react";
import "./styles/banner1.scss";
import Tilt from "react-parallax-tilt";

const Banner1 = () => {
  return (
    <div className="manage-advertising flex-box">
      <div className="pejndiv">
      {Data.map((props) => {
        return (
          <div className="divText">
            <h1 className="h1">
              <span class="kllapa">.</span>start<span class="kllapa">(</span>
              <p class="word"></p>
              <span class="kllapa">)</span>
              {props.h1banner1digilab}
            </h1>
            <p className="p1">{props.pbannerdigilab}</p>
            <div className="divBtn">
              {props.btnbanner1digilab}
              {props.btnbanner2digilab}
            </div>
          </div>
        );
      })}
      <div className="img-container">
        <Tilt scale={0.9} transitionSpeed={3500} className="img">
          <div className="inner-img"></div>
        </Tilt>
      </div>
      </div>
    </div>
  );
};

export default Banner1;

var words = ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 30,
  speed = 130;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});
