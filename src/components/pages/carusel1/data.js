import { FormattedMessage } from 'react-intl'

// import profile1 from '../../../assets/shared/profile1.png'
// import profile2 from '../../../assets/shared/profile2.png'
// import profile3 from '../../../assets/shared/profile3.png'
// import profile4 from '../../../assets/shared/profile4.png'

export const Data = [
    {
        id:1,
        // profile:profile1,
        comment:<FormattedMessage id='testimonials-comment1' defaultMessage="With directads.com our campaigns are up and running in just a few clicks. The platform is easy to use and you can optimize your campaign as you need. I am happy to recommend directads as one of the few networks you don't want to miss if you are looking for high-quality traffic and excellent customer support!" />,
        name:'Angela Hoffman',
        company:<FormattedMessage id='head-of-marketing-herby' defaultMessage='Head of Marketing, Herby' />
    },
    {
        id:2,
        // profile:profile2,
        comment:<FormattedMessage id='testimonials-comment2' defaultMessage="It is pleasure for us to work with directAds' team of professionals. No matter what we ask  and need, they are always there to support and find the best possible solutions. Our results and performance are always satisfying and exceed all expectations." />,
        name:'Jan Roberson',
        company:<FormattedMessage id='growth-manager-dressfield' defaultMessage='Growth Manager, Dressfield' />
    },
    {
        id:3,
        //profile:profile3,
        comment:<FormattedMessage id='testimonials-comment3' defaultMessage="directAds' extensive pool of interactive formats, detailed targeting in various industries and locations made our campaign running very successfully. directAds helped us achieve significant uplift through strategic ad placements and by connecting us to customers that we couldn't access on our own." />,
        name:'Darell Nieto',
        company:<FormattedMessage id='digital-director-young-amour' defaultMessage='Digital Director, Young Amour' />
    },
    {
        id:4,
       // profile:profile4,
        comment:<FormattedMessage id='testimonials-comment4' defaultMessage="directAds is an excellent platform, starting from pre-campaign insights, campaign launching, optimization, automation and campaign report. Everything you need is there. We are very pleased with the results we've got." />,
        name:'Margareta Mayers',
        company:<FormattedMessage id='marketing-manager-illyminati' defaultMessage='Marketing Manager, Illyminati' />
    }
]