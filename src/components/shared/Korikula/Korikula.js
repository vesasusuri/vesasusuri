import React from "react";
import "./styles/Korikula.scss";
import Data from "./data";
const Korikula = () => {
  return (
    <>
      <p className="korrikulatitle">.curricula()</p>

        <div className="our-vision">
        <div className="items">
          {Data.map((props) => {
            return (
              <div className="item">
                <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="vjec">
                  {props.mosha}
                </h6>
                <p>{props.permbajta}</p>
                <p>{props.periudha}</p>
                <p>{props.intenziteti}</p>
                <p>{props.grupi}</p>
                    <div className="buttons">
                        <p>{props.btnkorrikula}</p>
                        <p>{props.readmore}</p>
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
