import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import man from "../../../assets/shared/young.webp"
import ModalAnesa from "./anesaModal";
import ModalHatixhe from "./tixheModal";
import ModalFlori from "./floriModal";
import ModalRoni from "./roniModal";
const DrejtusitData =[
    {
        img:man,
        emri:<FormattedMessage id="flori" defaultMessage="Florjan Piraj"/>,
        role:<FormattedMessage id="CEO" defaultMessage="CEO"/>,
        closeBTN:<Link><ModalFlori/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="Roni" defaultMessage="Roni Kasemi"/>,
        role:<FormattedMessage id="COO" defaultMessage="COO"/>,
        closeBTN:<Link><ModalRoni/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="anesa" defaultMessage="Anesa Salihu"/>,
        role:<FormattedMessage id="admin" defaultMessage="Admin"/>,
        closeBTN:<Link><ModalAnesa/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="hatixhe" defaultMessage="Hatixhe Piraj"/>,
        role:<FormattedMessage id="admin" defaultMessage="Admin"/>,
        closeBTN:<Link><ModalHatixhe/></Link>
    },
]

export default DrejtusitData;
