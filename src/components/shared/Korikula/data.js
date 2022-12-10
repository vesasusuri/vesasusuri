import { FormattedMessage } from 'react-intl'
import {Link} from 'react-router-dom'
const Data = [
    {
        mosha:<FormattedMessage id='8-11' defaultMessage='8-11' />,
        permbajta:<FormattedMessage id='prtmbajtja1' defaultMessage='Content: Teaching logic and basic concepts of programming' />,
        periudha:<FormattedMessage id='periudha1' defaultMessage='Period: September - July (10 months/academic year)' />,
        intenziteti:<FormattedMessage id='intenziteti1' defaultMessage='intensity: 3 academic hours per week' />,
        grupi:<FormattedMessage id='grupi1' defaultMessage='Group : 8-16 students' />,
        btnkorrikula:<Link className="korrikula"><FormattedMessage id="register" defaultMessage=".register()"/></Link>,
        readmore:<Link className="readmore"><FormattedMessage id="readmore" defaultMessage=".readMore()"/></Link>,
    },
    {
        mosha:<FormattedMessage id='12-15' defaultMessage='12-15' />,
        permbajta:<FormattedMessage id='prtmbajtja2' defaultMessage='Content: Basics of web and mobile application development' />,
        periudha:<FormattedMessage id='periudha2' defaultMessage='Period: September - July (10 months/academic year)' />,
        intenziteti:<FormattedMessage id='intenziteti2' defaultMessage='Intensity: 3 academic hours per week' />,
        grupi:<FormattedMessage id='grupi2' defaultMessage='Group: 8-16 students' />,
        btnkorrikula:<Link className="korrikula"><FormattedMessage id="register" defaultMessage=".register()"/></Link>,
        readmore:<Link className="readmore"><FormattedMessage id="readmore" defaultMessage=".readMore()"/></Link>,
    },
    {
        mosha:<FormattedMessage id='16-18' defaultMessage='16-18' />,
        permbajta:<FormattedMessage id='prtmbajtja3' defaultMessage='Content: Web and Mobile Application Development' />,
        periudha:<FormattedMessage id='periudha3' defaultMessage='Period: September - July (10 months/academic year)' />,
        intenziteti:<FormattedMessage id='intenziteti3' defaultMessage='Intensity: 3 academic hours per week' />,
        grupi:<FormattedMessage id='grupi3' defaultMessage='Group : 8-16 students' />,
        btnkorrikula:<Link className="korrikula"><FormattedMessage id="register" defaultMessage=".register()"/></Link>,
        readmore:<Link className="readmore"><FormattedMessage id="readmore" defaultMessage=".readMore()"/></Link>,
    },
]

export default Data ;