import "./styles/banner2.scss";
import banner2 from "../../../assets/home/banner2.png";
import { FormattedMessage } from 'react-intl'

function Banner2() {
  return (
    <div className="next-level-component">
      {/* <div className="banner2"></div> */}
      {/* <img src={banner2} className="banner2"/> */}
      <div className="text">
        <h1>
          <FormattedMessage
            id="programming-banner2"
            defaultMessage=".programming() for ages 8-18 years"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-next-level-text"
            defaultMessage="Let us give your company creativity and attraction it deserves"
          />
        </p>
        <div className="link-container">
          {/* <StyledLink
            to="/"
            link={
              <FormattedMessage id="get-started" defaultMessage="Get Started" />
            }
          />  */}
        </div> 
      </div>
      <p class="programming-banner2">.programming() for ages 8-18 years</p>
    </div>
  );
}

export default Banner2;
