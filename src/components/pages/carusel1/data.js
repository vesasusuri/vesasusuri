import { FormattedMessage } from 'react-intl'
import almiri from "../../../assets/home/almiri.png"

export const Data = [
    {
        id:1,
        profile:almiri,
        comment:<FormattedMessage id='testimonials-almir' defaultMessage="The 19 years old Almir Pinduk is a student at Digital School in Prizren for almost 3 years. He is one of our best students that got an internship at Digilab as a Full Stack Developer. Almir is a Full Stack Developer that has focus to be a Software Engineer. He is also a November Code Fest 2022 Finalist" />,
        name:'Almir Pinduk',
        company:<FormattedMessage id='fullStackDev' defaultMessage='Full Stack Developer' />
    },
    {
        id:2,
        profile:almiri,
        comment:<FormattedMessage id='testimonials-vesa' defaultMessage="The 16 years old Vesa Susuri is a student at Digital School in Prizren for almost 5 years. She's one of our best students that got an internship at Digilab as a Full Stack Developer. Vesa is a Full Stack Developer and an Adobe Xd Designer that has focus to be a Software Engineer. She is a November Code Fest 2021 Winner and a November Code Fest 2022 Finalist. " />,
        name:'Vesa Susuri',
        company:<FormattedMessage id='fullStackDev' defaultMessage='Full Stack Developer' />
    },
    {
        id:3,
        profile:almiri,
        comment:<FormattedMessage id='testimonials-mali' defaultMessage="The 14 years old Malart Peqani is a student at Digital School in Prizren for almost 5 years. He's one of our best students that got an internship at Digilab as a Front End Developer. Malart is a Full Stack Developer that has focus to be a Softwear Developer." />,
        name:'Malart Peqani',
        company:<FormattedMessage id='fullStackDev' defaultMessage='Full Stack Developer' />
   },
    {
        id:4,
        profile:almiri,
        comment:<FormattedMessage id='testimonials-lendriti' defaultMessage="The 19 years old Lendrit Kolgeci is a student at Digital School in Prizren for almost 1 years. He's one of our best students that got an internship at Digilab as a Front End Developer. Lendrit is a Front End Developer that has focus to be a Full Stack Developer." />,
        name:'Lendrit Kolgeci',
        company:<FormattedMessage id='frontEndDev' defaultMessage='Front End Developer' />
    }
]