import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/statistikat.scss";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { Data1 } from "./satistikatData";

const Statistikat = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <div className="shared-premium-adNetwork">
      <div className="text">
        <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">
          <FormattedMessage
            id="dsh"
            defaultMessage="Digital School Prizren"
          />
        </h1>
        <p className="shared-text">
          <FormattedMessage
            id="adNetwork-text"
            defaultMessage="Digital School Prizren students statistics"
          />
        </p>
      </div>
      <div className="globe"></div>
      <div className="items">
        {Data1.map((props) => {
          return (
            <div className="item" key={props.id}>
              <h6>
                <CountUp
                  end={props.nr}
                  duration={1.75}
                  decimals={props.decimals}
                  useEasing={true}
                  start={viewPortEntered ? null : 10}
                >
                  {({ countUpRef }) => {
                    return (
                      <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                          if (isVisible) {
                            setViewPortEntered(true);
                          }
                        }}
                        delayedCall
                      >
                        <span ref={countUpRef}></span>
                      </VisibilitySensor>
                    );
                  }}
                </CountUp>
                {props.sign}
              </h6>
              <p data-aos="fade-right" data-aos-easing="ease-in-sine">
                {props.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistikat;
