import React from "react";
import "./styles/Korikula.scss";
import Data from "./data";
import pic from "../../../assets/home/landing.png";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
const Korikula = () => {
  return (
    <>
      <div className="bgimg">
        <div className="textinimg">
          <img src={pic} className="imagepic" />
          <p class="korrikulatitle">
            <span className="changecolor">.</span>curricula
            <span className="changecolor">()</span>
          </p>
        </div>
      </div>
      <p className="korrikulatitle"></p>

      <div className="our-vision">
        <div className="items">
          {Data.map((props) => {
            return (
              <div className="itemKorrikula" key={props.id}>
                <div className="text">
                  <div className="inline inline2">
                    <span>{props.mosha}</span>
                    <div className="line"></div>
                  </div>
                  <p className="p">{props.permbajta}</p>
                  <p className="p">{props.periudha}</p>
                  <p className="p">{props.intenziteti}</p>
                  <p className="p">{props.grupi}</p>
                </div>
                <div className="bottom">
                  <div>
                    {/* <div className="items">
                      {props.items.map((l, i) => {
                        return (
                          <div className="small-item" key={i}>
                            <div className="icon">{l.icon}</div>
                            <p>{l.title}</p>
                            <p>({l.nr})</p>
                          </div>
                        );
                      })}
                    </div> */}
                  </div>
                  <div className="btnKorrikula">
                    <Link>
                      <FormattedMessage
                        id="view-details"
                        defaultMessage=".readMore()"
                      />
                    </Link>
                    <Link>
                      <FormattedMessage
                        id="register"
                        defaultMessage=".register()"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Korikula;
