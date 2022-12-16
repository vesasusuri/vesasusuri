import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
const Data = [
    {
        h1banner1digilab:<FormattedMessage id="start-coding" defaultMessage=".start() coding with Digital School"/>,
        pbannerdigilab:<FormattedMessage id="get-an-opp" defaultMessage="Be a student in Digital School and get an opporturnity to work at Digi Lab "/>,
        btnbanner1digilab:<Link className="learn"><FormattedMessage id=".logIn()" defaultMessage=".logIn()"/></Link>,
        btnbanner2digilab:<Link className="learn"><FormattedMessage id=".signUp()" defaultMessage=".signUp()"/></Link>
    }
]

export default Data;