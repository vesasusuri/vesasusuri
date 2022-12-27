import React from 'react'
import './styles/Carousel3.scss'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FormattedMessage } from 'react-intl'
import Carousel from 'react-elastic-carousel'
import { Data4 } from './data'
import { FaAward } from 'react-icons/fa'
import pic from "../../../assets/home/landing.png";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
];

const Carousel3 = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };

    return (
        <div className='professional-certificates'>
          <div className="bgimgg">
            <div className="textinimgg">
            <img src={pic} className="imagepicc"/>
                <p class="summerSchool"><span className="changecolor">.</span>summerSchool<span className="changecolor">()</span></p>
            </div>
            </div>
          <br></br> <br></br>
            <Carousel className="slider" 
                breakPoints={breakPoints} 
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Data4.map((props) => {
                    return(
                        <div className="item">
                            <div className="square square1"></div>
                            <div className="square2"></div>
                            <div className="main">
                                <div className="top">
                                    <div className="icon"><FaAward /></div>
                                    <p>
                                        <FormattedMessage id='certificate' 
                                        defaultMessage='Certificate from Digital School' />
                                    </p>
                                </div>
                                <h6>{props.title}</h6>
                                <div className="months">
                                    {props.months}&nbsp;
                                    {props.months > 1 ? 
                                        <FormattedMessage id='Week' defaultMessage='Weeks' />
                                        :
                                        <FormattedMessage id='Week' defaultMessage='Weeks' />
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Carousel3