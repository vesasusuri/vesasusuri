import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import man from "../../../assets/shared/young.webp"
import SpringModal from "./modal";
import ModalFatjona from "./modalFatjona";
import ModalKeba from "./kebaModal";
import ModalFloranda from "./florandaModal";
import ModalAnesa from "./anesaModal";
import ModalHatixhe from "./tixheModal";
import ModalFlori from "./floriModal";
import ModalRoni from "./roniModal";
import ModalAlmir from "./almirModal";
import ModalVesa from "./vesaModal";
import ModalMal from "./malModal";
import ModalLendriti from "./lendrititModal";
// import ModalFloranda from "./florandaModal";
// import ModalFloranda from "./florandaModal";


const OurTeamData =[
    {
        closeBTN:<Link><SpringModal/></Link>,
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Aritanit Tershnjaku"/>,
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

    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Anesa Salihu"/>,
        role:<FormattedMessage id="role" defaultMessage="Admin"/>,
        closeBTN:<Link><ModalAnesa/></Link>
    },

    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Hatixhe Piraj"/>,
        role:<FormattedMessage id="role" defaultMessage="Admin"/>,
        closeBTN:<Link><ModalHatixhe/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Florjan Piraj"/>,
        role:<FormattedMessage id="role" defaultMessage="CEO"/>,
        closeBTN:<Link><ModalFlori/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Roni Kasemi"/>,
        role:<FormattedMessage id="role" defaultMessage="COO"/>,
        closeBTN:<Link><ModalRoni/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Almir Pinduk"/>,
        role:<FormattedMessage id="role" defaultMessage="Full Stack Developer"/>,
        closeBTN:<Link><ModalAlmir/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Vesa Susuri"/>,
        role:<FormattedMessage id="role" defaultMessage="Full Stack Developer / UI x UX Designer"/>,
        closeBTN:<Link><ModalVesa/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Malart Peqani"/>,
        role:<FormattedMessage id="role" defaultMessage="Front End Developer"/>,
        closeBTN:<Link><ModalMal/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Lendrit Kolgeci"/>,
        role:<FormattedMessage id="role" defaultMessage="Fron End Developer"/>,
        closeBTN:<Link><ModalLendriti/></Link>
    },
]

export default OurTeamData;
