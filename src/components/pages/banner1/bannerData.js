import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
const Data = [
    {
        h1banner1digilab:<FormattedMessage id="start-coding" defaultMessage="coding with Digital School Prizren"/>,
        pbannerdigilab:<FormattedMessage id="get-an-opp" defaultMessage="Be a student in Digital School and get an opporturnity to work at Digi Lab "/>,
        btnbanner1digilab:<Link className="hover-button"><FormattedMessage id=".logIn()" defaultMessage=".logIn()"/></Link>,
        btnbanner2digilab:<Link className="signupbtn"><FormattedMessage id=".signUp()" defaultMessage=".signUp()"/></Link>    }
]

export default Data;