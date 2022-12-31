import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import man from "../../../assets/shared/young.webp"
import SpringModal from "../modals/modal";
import ModalFatjona from "../modals/modalFatjona";
import ModalKeba from "../modals/kebaModal";
import ModalFloranda from "../modals/florandaModal";
const OurTeamData =[
    {
        closeBTN:<Link><SpringModal/></Link>,
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Arianit Tershnjaku"/>,
        role:<FormattedMessage id="role" defaultMessage="Software Engineer"/>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Fatjona Hoxhaj"/>,
        role:<FormattedMessage id="role" defaultMessage="Software Engineer"/>,
        closeBTN:<Link><ModalFatjona/></Link>
    },

    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Kebir Cesko"/>,
        role:<FormattedMessage id="role" defaultMessage="Software Engineer"/>,
        closeBTN:<Link><ModalKeba/></Link>
    },

    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Floranda Qenaj"/>,
        role:<FormattedMessage id="role" defaultMessage="Software Engineer"/>,
        closeBTN:<Link><ModalFloranda/></Link>
    },
]

export default OurTeamData;
