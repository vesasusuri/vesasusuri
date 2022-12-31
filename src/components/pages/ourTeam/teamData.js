import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import man from "../../../assets/shared/young.webp"
import ModalAlmir from "../modals/almirModal";
import ModalVesa from "../modals/vesaModal";
import ModalMal from "../modals/malModal";
import ModalLendriti from "../modals/lendrititModal";

const DevelopersData =[
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Almir Pinduk"/>,
        role:<FormattedMessage id="role" defaultMessage="Full Stack Developer"/>,
        closeBTN:<Link><ModalAlmir/></Link>
    },
    {
        img:man,
        emri:<FormattedMessage id="arianit" defaultMessage="Vesa Susuri"/>,
        role:<FormattedMessage id="role" defaultMessage="Full Stack Developer"/>,
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
        role:<FormattedMessage id="role" defaultMessage="Front End Developer"/>,
        closeBTN:<Link><ModalLendriti/></Link>
    },
]

export default DevelopersData;
