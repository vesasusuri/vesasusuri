import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from 'react-intl'

import BusinessMenu from './BusinessMenu'
import CompanyMenu from './CompanyMenu'
import ProductsMenu from './ProductsMenu'
import ResourcesMenu from './ResourcesMenu'
import SolutionsMenu from './SolutionsMenu'


import computer2 from "../../../../assets/shared/computer2.png"



export const ProductsData1 = [
    {
        category: <FormattedMessage id='payments' defaultMessage='Payments' />,
        categoryId: 'payments',
        to1: '/',
        links:[
            {
                id: 1,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-payments' defaultMessage='Pay2gate Payments' />,
                text: <FormattedMessage id='products-tab1-text1' defaultMessage='Online Payments' />,
                to: '/'
            },
            {
                id: 2,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-tasks' defaultMessage='Pay2gate Tasks' />,
                text: <FormattedMessage id='products-tab1-text2' defaultMessage='We Monetize Your Work' />,
                to: '/'
            },
            {
                id: 3,                
                icon:computer2,
                title: <FormattedMessage id='paymentgate-billing' defaultMessage='Pay2gate Billing' />,
                text: <FormattedMessage id='products-tab1-text31' defaultMessage='Sell Where And How You Want With Our Flexible And Scalable Platform' />,
                to: '/'
            },
            {
                id: 4,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-checkout' defaultMessage='Pay2gate Checkout' />,
                text: <FormattedMessage id='products-tab1-text4' defaultMessage='Pre-Built Payments Page' />,
                to: '/'
            },
            {
                id: 5,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-accounts-payable' defaultMessage='Pay2gate Accounts Payable' />,
                text: <FormattedMessage id='products-tab1-text5' defaultMessage='Pay Or Get Paid For Work. ' />,
                to: '/'
            },
            {
                id: 6,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-processing' defaultMessage='Pay2gate Processing' />,
                text: <FormattedMessage id='products-tab1-text6' defaultMessage='Start Accepting Card Payments' />,
                to: '/'
            },
            {
                id: 7,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-Affiliate' defaultMessage='Pay2gate Affiliate' />,
                text: <FormattedMessage id='products-tab1-text7' defaultMessage='Find And Explore Affiliates For Your Business' />,
                to: '/'
            },
            {
                id: 8,
                icon:computer2,
                title: <FormattedMessage id='paymrentgate-project-backing' defaultMessage='Pay2gate Project Backing' />,
                text: <FormattedMessage id='products-tab1-text8' defaultMessage='Terms Designed For Startups.' />,
                to: '/'
            },
            {
                id: 9,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-shop' defaultMessage='Pay2gate Shop' />,
                text: <FormattedMessage id='products-tab1-text9' defaultMessage='Create A Shop Within Seconds' />,
                to: '/'
            },
            {
                id: 10,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-links' defaultMessage='Pay2gate Links' />,
                text: <FormattedMessage id='products-tab1-text10' defaultMessage='No-Code Payments' />,
                to: '/'
            },
            {
                id: 11,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-creators' defaultMessage='Pay2gate Creators' />,
                text: <FormattedMessage id='products-tab1-text11' defaultMessage='Create And Get Paid' />,
                to: '/'
            },
            {
                id: 12,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-escrow' defaultMessage='Pay2gate Escrow' />,
                text: <FormattedMessage id='products-tab1-text12' defaultMessage='We Offer Escrow Payment Service For Various Services.' />,
                to: '/'
            }
        ]
    },
    {
        category: <FormattedMessage id='financial-services' defaultMessage='Financial services' />,
        categoryId: 'financial-services',
        to1: '/',
        sliderTo: '/',
        links:[
            {
                id: 13,
                icon:computer2,
                title: <FormattedMessage id='corporate-card ' defaultMessage='Corporate Card ' />,
                text: <FormattedMessage id='products-tab2-text1' defaultMessage='Spend Management' />,
                to: '/'
            },
            {
                id: 14,
                icon:computer2,
                title: <FormattedMessage id='crowd-funding' defaultMessage='Crowd Funding' />,
                text: <FormattedMessage id='products-tab2-text2' defaultMessage='Raise Funds' />,
                to: '/'
            },
            {
                id: 15,
                icon:computer2,
                title: <FormattedMessage id='capital' defaultMessage='Capital' />,
                text: <FormattedMessage id='products-tab2-text3' defaultMessage='Business Financing' />,
                to: '/'
            },
            {
                id: 16,
                icon:computer2,
                title: <FormattedMessage id='transaction-fees' defaultMessage='Transaction Fees' />,
                text: <FormattedMessage id='products-tab2-text4' defaultMessage='Business Financing' />,
                to: '/'
            },
            {
                id: 17,
                icon:computer2,
                title: <FormattedMessage id='Iissuing' defaultMessage='Issuing' />,
                text: <FormattedMessage id='products-tab2-text5' defaultMessage='Card Creation' />,
                to: '/'
            },
            {
                id: 18,
                icon:computer2,
                title: <FormattedMessage id='payment-methods' defaultMessage='Payment Methods' />,
                text: <FormattedMessage id='products-tab2-text6' defaultMessage='Card Creation' />,
                to: '/'
            },
            {
                id: 19,
                icon:computer2,
                title: <FormattedMessage id='treasury' defaultMessage='Treasury' />,
                text: <FormattedMessage id='products-tab2-text7' defaultMessage='Banking-As-A-Service' />,
                to: '/'
            },
            {
                id: 20,
                icon:computer2,
                title: <FormattedMessage id='reports' defaultMessage='Reports' />,
                text: <FormattedMessage id='products-tab2-text8' defaultMessage='Get Details For Every Payment' />,
                to: '/'
            },
        ],
        slider:[
            {
                id: 'products-slider2-item1',
                title:<FormattedMessage id='products-slider2-title1' defaultMessage='Streamline in-person payments with recent Stripe Terminal upgrades' />,
                text:<FormattedMessage id='products-slider2-text1' defaultMessage='When we launched Stripe Terminal, our in-person checkout solution, our goal was to help our users deliver seamless commerce experiences across online and offline channels. In the four years since, we’ve been continuously working on improvements to help businesses better serve their customers.' />,
            },
            {
                id: 'products-slider2-item2',
                title:<FormattedMessage id='products-slider2-title2' defaultMessage='Streamline in-person payments with recent Stripe Terminal upgrades' />,
                text:<FormattedMessage id='products-slider2-text2' defaultMessage='When we launched Stripe Terminal, our in-person checkout solution, our goal was to help our users deliver seamless commerce experiences across online and offline channels. In the four years since, we’ve been continuously working on improvements to help businesses better serve their customers.' />,
            },
        ]
    },
    {
        category: <FormattedMessage id='business-operations' defaultMessage='Business operations' />,
        categoryId: 'business-operations',
        to1: '/',
        links:[
            {
                id: 21,
                icon:computer2,
                title: <FormattedMessage id='secure-payments' defaultMessage='Secure Payments' />,
                text: <FormattedMessage id='products-tab3-text1' defaultMessage='Fraud & Risk Management' />,
                to: '/'
            },
            {
                id: 22,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-climate' defaultMessage='Paymentgate Climate' />,
                text: <FormattedMessage id='products-tab3-text2' defaultMessage='Carbon Removal' />,
                to: '/'
            },
            {
                id: 23,
                icon:computer2,
                title: <FormattedMessage id='financial-connections' defaultMessage='Financial Connections' />,
                text: <FormattedMessage id='products-tab3-text3' defaultMessage='Linked Financial Account Data' />,
                to: '/'
            },
            {
                id: 24,
                icon:computer2,
                title: <FormattedMessage id='data-pipeline' defaultMessage='Data Pipeline' />,
                text: <FormattedMessage id='products-tab3-text4' defaultMessage='Data Warehouse Sync' />,
                to: '/'
            },
            {
                id: 25,
                icon:computer2,
                title: <FormattedMessage id='tax' defaultMessage='Tax' />,
                text: <FormattedMessage id='products-tab3-text5' defaultMessage='Sales Tax & Vat Automation' />,
                to: '/'
            },
            {
                id: 26,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-&-eCommerce' defaultMessage='Paymentgate & eCommerce' />,
                text: <FormattedMessage id='products-tab3-text6' defaultMessage='Highly Localized Payment Experience' />,
                to: '/'
            },
            {
                id: 27,
                icon:computer2,
                title: <FormattedMessage id='reports1' defaultMessage='Reports' />,
                text: <FormattedMessage id='products-tab3-text7' defaultMessage='Custom Reports' />,
                to: '/'
            },
            {
                id: 28,
                icon:computer2,
                title: <FormattedMessage id='identity' defaultMessage='Identity' />,
                text: <FormattedMessage id='products-tab3-text8' defaultMessage='Online Identity Verification' />,
                to: '/'
            },
            {
                id: 29,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-&-fintech' defaultMessage='Paymentgate & Fintech' />,
                text: <FormattedMessage id='products-tab3-text9' defaultMessage='Boosts Payment Performance' />,
                to: '/'
            },
            {
                id: 30,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-globe' defaultMessage='Paymentgate Globe' />,
                text: <FormattedMessage id='products-tab3-text10' defaultMessage='Startup Incorporation' />,
                to: '/'
            },
            {
                id: 31,
                icon:computer2,
                title: <FormattedMessage id='revenue-recognition' defaultMessage='Revenue Recognition' />,
                text: <FormattedMessage id='products-tab3-text11' defaultMessage='Accounting Automation' />,
                to: '/'
            },
            {
                id: 32,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-&-gaming' defaultMessage='Paymentgate & Gaming' />,
                text: <FormattedMessage id='products-tab3-text12' defaultMessage='Platform-Based Businesses' />,
                to: '/'
            }
        ]
    },
    {
        category: <FormattedMessage id='toolbox1' defaultMessage='Toolbox' />,
        categoryId: 'toolbox',
        to1: '/',
        links:[
            {
                id: 33,
                icon:computer2,
                title: <FormattedMessage id='measure-performance' defaultMessage='Measure performance' />,
                text: <FormattedMessage id='products-tab4-text1' defaultMessage='Real-Time Performance Tracking' />,
                to: '/'
            },
            {
                id: 34,
                icon:computer2,
                title: <FormattedMessage id='payment-history' defaultMessage='Payment History' />,
                text: <FormattedMessage id='products-tab4-text2' defaultMessage='Payments, Transaction History' />,
                to: '/'
            },
            {
                id: 35,
                icon:computer2,
                title: <FormattedMessage id='global-acquiring' defaultMessage='Global Acquiring' />,
                text: <FormattedMessage id='products-tab4-text3' defaultMessage='Real-Time Performance Tracking' />,
                to: '/'
            },
            {
                id: 36,
                icon:computer2,
                title: <FormattedMessage id='manage-your-growth' defaultMessage='Manage your growth' />,
                text: <FormattedMessage id='products-tab4-text4' defaultMessage='Growth Management' />,
                to: '/'
            },
            {
                id: 37,
                icon:computer2,
                title: <FormattedMessage id='paymentslist' defaultMessage='Paymentslist' />,
                text: <FormattedMessage id='products-tab4-text5' defaultMessage='All Payment Lists' />,
                to: '/'
            },
            {
                id: 38,
                icon:computer2,
                title: <FormattedMessage id='paymentgate-widgets' defaultMessage='Paymentgate Widgets' />,
                text: <FormattedMessage id='products-tab4-text6' defaultMessage='Check All Widgets' />,
                to: '/'
            },
            {
                id: 39,
                icon:computer2,
                title: <FormattedMessage id='grow-together' defaultMessage='Grow together' />,
                text: <FormattedMessage id='products-tab4-text7' defaultMessage="Let's Grow Together" />,
                to: '/'
            },
            {
                id: 40,
                icon:computer2,
                title: <FormattedMessage id='fraud-detection' defaultMessage='Fraud Detection' />,
                text: <FormattedMessage id='products-tab4-text8' defaultMessage='Secure Payments' />,
                to: '/'
            },
            {
                id: 41,
                icon:computer2,
                title: <FormattedMessage id='payments-monitoring' defaultMessage='Payments Monitoring' />,
                text: <FormattedMessage id='products-tab4-text9' defaultMessage='Monitor Payments' />,
                to: '/'
            },
            {
                id: 42,
                icon:computer2,
                title: <FormattedMessage id='customer-self-service' defaultMessage='Customer Self-Service' />,
                text: <FormattedMessage id='products-tab4-text10' defaultMessage='Self-Service' />,
                to: '/'
            },
            {
                id: 43,
                icon:computer2,
                title: <FormattedMessage id='subscription' defaultMessage='Subscription' />,
                text: <FormattedMessage id='products-tab4-text11' defaultMessage='Subscribe To Pay2gate' />,
                to: '/'
            },
            {
                id: 44,
                icon:computer2,
                title: <FormattedMessage id='mobile-payments' defaultMessage='Mobile Payments' />,
                text: <FormattedMessage id='products-tab4-text12' defaultMessage='Pay Via Mobile' />,
                to: '/'
            },
        ]
    },
]


export const ResourcesData1 = [
    {
        category: <FormattedMessage id='resources1' defaultMessage='Resources' />,
        categoryId: 'resources',
        to1: '/',
        links:[
            {
                id: 1,
                icon:computer2,
                title: <FormattedMessage id='how-pay2gate-works' defaultMessage='How Pay2Gate Works' />,
                text:<FormattedMessage id='intro-video1' defaultMessage='See Our Introduction Video' />,
                to: '/'
            },
            {
                id: 2,
                icon:computer2,
                title: <FormattedMessage id='help-center' defaultMessage='Help Center' />,
                text:<FormattedMessage id='more-about-tearms' defaultMessage='Learn More About Tearms Of Use' />,
                to: '/'
            },
            {
                id: 3,
                icon:computer2,
                title: <FormattedMessage id='support' defaultMessage='Support' />,
                text:<FormattedMessage id='pay2gate-offers' defaultMessage='Pay2Gate offers 24/7 Support' />,
                to: '/'
            },
            {
                id: 4,
                icon:computer2,
                title: <FormattedMessage id='become-a-partner' defaultMessage='Become A Partner' />,
                text:<FormattedMessage id='connect-with-us' defaultMessage='Connect With Us On Different Level' />,
                to: '/'
            },
            {
                id: 5,
                icon:computer2,
                title: <FormattedMessage id='blog' defaultMessage='Blog' />,
                text:<FormattedMessage id='check-out-our-blog' defaultMessage='Check Out Our Blog' />,
                to: '/'
            },
            {
                id: 6,
                icon:computer2,
                title: <FormattedMessage id='faq' defaultMessage="FAQ's" />,
                text:<FormattedMessage id='have-some-questions' defaultMessage='Have Some Questions?' />,
                to: '/'
            },
        ]
    }
]

export const CompanyData2 = [
    {
        category: <FormattedMessage id='pricing' defaultMessage='Pricing' />,
        id:'pricing',
        links:[
            {
                link:<FormattedMessage id='companyMenu2-link1' defaultMessage='Transparent pricing for all businesses' />,
                to:'/',
                id:1
            },
        ]
    },
    {
        category: <FormattedMessage id='partner-ecosystem' defaultMessage='Partner Ecosystem' />,
        id:'partner-ecosystem',
        links:[
            {
                link:<FormattedMessage id='companyMenu2-link2' defaultMessage='Platforms and integrators supported by Paymentgate' />,
                to:'/',
                id:2
            },
        ]
    },
    {
        category: <FormattedMessage id='affiliates-&-partners' defaultMessage='Affiliates & Partners' />,
        id:'affiliates-&-partners',
        links:[
            {
                link:<FormattedMessage id='companyMenu2-link3' defaultMessage='We have countless oppurtunities waiting for you' />,
                to:'/',
                id:3
            },
        ]
    },
    {
        category: <FormattedMessage id='company' defaultMessage='Company' />,
        id:'company',
        links:[
            {
                link:<FormattedMessage id='companyMenu2-link4' defaultMessage='Why Paymentgate' />,
                to:'/',
                id:4
            },
            {
                link:<FormattedMessage id='companyMenu2-link5' defaultMessage='Developers API' />,
                to:'/',
                id:5
            },
            {
                link:<FormattedMessage id='companyMenu2-link6' defaultMessage='Marketplace' />,
                to:'/',
                id:6
            },
            {
                link:<FormattedMessage id='companyMenu2-link7' defaultMessage='Help & Support' />,
                to:'/',
                id:7
            },
            {
                link:<FormattedMessage id='companyMenu2-link8' defaultMessage='All Products' />,
                to:'/',
                id:8
            }
        ]
    }
]
export const CompanyData1 = [
    {
        category: <FormattedMessage id='Our-activities' defaultMessage='Our activities' />,
        categoryId: 'about-us',
        to1: '/',
        links:[
            {
                id: 1,
                icon:computer2,
                title: <FormattedMessage id='cinema' defaultMessage='Cinema' />,
                to: '/'
            },
            {
                id: 2,
                icon:computer2,
                title: <FormattedMessage id='November-Code-Fest' defaultMessage='November Code Fest' />,
                to: '/'
            },
            {
                id: 3,
                icon:computer2,
                title: <FormattedMessage id='Spring-Camp' defaultMessage='Spring Camp' />,
                to: '/'
            },
            {
                id: 4,
                icon:computer2,
                title:<FormattedMessage id='tournaments' defaultMessage='Tournaments' />,
                to: '/'
            },
            {
                id: 5,
                icon:computer2,
                title: <FormattedMessage id='Summer-School' defaultMessage='Summer School' />,
                to: '/'
            },
            {
                id: 6,
                icon:computer2,
                title: <FormattedMessage id='Other-courses' defaultMessage='Other courses' />,
                to: '/'
            }
        ]
    }
]


export const SolutionData1 = [
    {
        category: <FormattedMessage id='beginner' defaultMessage='Beginner' />,
        categoryId: 'by-business-type',
        to1: '/',
        links:[
            {
                id: 1,
                icon:computer2,
                title: <FormattedMessage id='Code-2' defaultMessage='Code ' />,
                to: '/'
            },
            {
                id: 2,
                icon:computer2,
                title: <FormattedMessage id='Scratch' defaultMessage='Scratch' />,
                to: '/'
            },
            {
                id: 3,
                icon:computer2,
                title: <FormattedMessage id='Code-4' defaultMessage='Mit App Inventor' />,
                to: '/'
            }
        ]
    },
    {
        category: <FormattedMessage id='Advanced' defaultMessage='Advanced' />,
        categoryId: 'by-role',
        to1: '/',
        links:[
            {
                id: 4,
                icon:computer2,
                title: <FormattedMessage id='HTML-&-CSS-&-JS' defaultMessage='HTML & CSS & JS' />,
                to: '/'
            },
            {
                id: 5,
                icon:computer2,
                title: <FormattedMessage id='laravel' defaultMessage='Laravel' />,
                to: '/'
            },
            {
                id: 6,
                icon:computer2,
                title: <FormattedMessage id='Wordpress' defaultMessage='Wordpress' />,
                to: '/'
            },
            {
                id: 7,
                icon:computer2,
                title: <FormattedMessage id='Laravel' defaultMessage='React/ Js / Native' />,
                to: '/'
            },
            {
                id: 8,
                icon:computer2,
                title: <FormattedMessage id='Php-&-mySql' defaultMessage='Php & mySql' />,
                to: '/'
            },
            {
                id: 9,
                icon:computer2,
                title: <FormattedMessage id='developers-and-it' defaultMessage='Java' />,
                to: '/'
            }
        ]
    }
]

export const MainData2 = [
    {
        link:<FormattedMessage id='.home()' defaultMessage='.home()' />,
        cls:'products-link',
        to:'/',
        // megamenu:<ProductsMenu />
    },
    {
        link:<FormattedMessage id='.ourTeam()' defaultMessage='.ourTeam()' />,
        cls:'about-link',
        to:'/ourTeam',
        // megamenu:<CompanyMenu />
    },
    {
        link:<FormattedMessage id='.aboutUs()' defaultMessage='.aboutUs()' />,
        cls:'resources-link',
        to:'/',
        // megamenu:<ResourcesMenu />
    },
    {
        link:<FormattedMessage id='.projects()' defaultMessage='.projects()' />,
        cls:'solutions-link',
        to:'/',
        megamenu:<SolutionsMenu />
    },
    {
        link:<FormattedMessage id='.activities()' defaultMessage='.activities()' />,
        cls:'contact-link',
        to:'/',
        megamenu:<CompanyMenu />
    
    },
]