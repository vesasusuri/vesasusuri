import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProductsData1 } from "./data";
import Carousel from "react-elastic-carousel";
import "./megamenus.scss"
const productsMenu = () => {
  return (
    <div className="bottom-nav-megamenu products-megamenu">
      <Tabs className="tabs">
        <TabList>
          <Tab>
            <p><FormattedMessage id="payments" defaultMessage="Payments" /></p>
          </Tab>
          <Tab>
            <FormattedMessage
              id="financial services"
              defaultMessage="Financial Services"
            />
          </Tab>
          <Tab>
            <FormattedMessage
              id="business operations"
              defaultMessage="Business Operations"
            />
          </Tab>
          <Tab>
            <FormattedMessage id="toolbox" defaultMessage="Toolbox" />
          </Tab>
          <Tab>
            <FormattedMessage
              id="apis & integrations"
              defaultMessage="APIs & Integrations"
            />
          </Tab>
          <Tab>
            <FormattedMessage
              id="monetization platform"
              defaultMessage="Monetization Platform"
            />
          </Tab>
          <Tab>
            <FormattedMessage id="ecommerce" defaultMessage="Ecommerce" />
          </Tab>
        </TabList>

        <div className="tab-panel">
          {ProductsData1.map((props) => {
            return (
              <TabPanel key={props.categoryId}>
                <div className={`inner-panel ${props.categoryId}`}>
                  {props.links ? (
                    <div className="inner-links">
                      <h5>{props.category}</h5>
                      {props.links.map((l) => {
                        return (
                          <Link to='/products' key={l.id} className="megamenu-link">
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
                      <div className="div-centered-item1">
                        <Link to={props.to1} className="centered-item1">
                          <FormattedMessage
                            id="view-all"
                            defaultMessage="View-all"
                          />
                          <BsArrowRight />
                        </Link>
                      </div>
                    </div>
                  ) : null}
                  {/* {props.slider ? (
                    <div className="slider-container">
                      <Carousel className="slider" itemsToShow={1}>
                        {props.slider.map((l) => {
                          return (
                            <div className="slider-item" key={l.id}>
                              <div className="logo"></div>
                              <h6>{l.title}</h6>
                              <p>{l.text}</p>
                            </div>
                          );
                        })}
                      </Carousel>
                      <Link to={props.sliderTo}>
                        <FormattedMessage
                          id="learn-more"
                          defaultMessage="Learn more"
                        />
                      </Link>
                    </div>
                  ) : null} */}
                </div>
              </TabPanel>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default productsMenu;
