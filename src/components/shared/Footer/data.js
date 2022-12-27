import { FormattedMessage } from 'react-intl'

export const FooterData = [
    {
        id:1,
        category:<FormattedMessage id='digilab' defaultMessage='Digi Lab' />,
        links:[
            {
                link: <FormattedMessage id='students' defaultMessage='Students' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='projects' defaultMessage='Projects' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='partners' defaultMessage='Partners' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='pricing' defaultMessage='Pricing' />,
                to:'/'
            },
        ]
    },
    {
        id:2,
        category:<FormattedMessage id='resources' defaultMessage='Shd Prizren' />,
        links:[
            {
                link: <FormattedMessage id='blog' defaultMessage='Blog' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='success-stories' defaultMessage='Success Stories' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='student-projects' defaultMessage='Student Projects' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='activities' defaultMessage='Activities' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='summer-School' defaultMessage='Summer School' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='nfc' defaultMessage='November Code Fest' />,
                to:'/'
            },
        ]
    },
    {
        id:3,
        category:<FormattedMessage id='about' defaultMessage='About' />,
        links:[
            {
                link: <FormattedMessage id='about-us' defaultMessage='About Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='careers' defaultMessage='Careers' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='our-team' defaultMessage='Our Team' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='guidelines' defaultMessage='Guidelines' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='events' defaultMessage='Events' />,
                to:'/'
            }
        ]
    },
    {
        id:4,
        category:<FormattedMessage id='help-center' defaultMessage='Help Center' />,
        links:[
            {
                link: <FormattedMessage id='help-center' defaultMessage='Help Center' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='faqs-for-advertisers' defaultMessage='FAQ' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='trust-center' defaultMessage='Trust Center' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='contact-us' defaultMessage='Contact Us' />,
                to:'/'
            }
        ]
    },

]