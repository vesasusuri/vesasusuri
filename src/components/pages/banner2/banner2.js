import "./styles/banner2.scss";
import { FormattedMessage } from 'react-intl'

function Banner2() {
  return (
    <div className="next-level-component">
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
            defaultMessage="Let us give you an opportunity to learn and to get an internship at Digi Lab"
          />
        </p>
      </div>
    </div>
  );
}

export default Banner2;
