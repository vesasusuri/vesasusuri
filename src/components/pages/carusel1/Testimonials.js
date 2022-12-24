import React from 'react'
import './styles/testimonials.scss'
import Carousel from 'react-elastic-carousel'
import { Data } from './data'
import { ImQuotesLeft } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'

const Carousel1 = () => {

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
        <div className="shared-testimonials-slider">
            <Carousel className='slider' 
                itemsToShow={1}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                {Data.map((props) => {
                    return(
                        <div className="item" key={props.id}>

                            <div className="main">
                                <div className="img-container">
                                    <div className="profile" style={{content: `url(${props.profile})`}}></div>
                                </div>

                                <div className="info">
                                    <div className="quote">
                                        <ImQuotesLeft />
                                    </div>
                                    <div className="block">
                                        <p>{props.comment}</p>
                                        <div className="inline">
                                            <div className="block">
                                                <h6>{props.name}</h6>
                                                <div className="company">{props.company}</div>
                                            </div>
                                            <div className="reviews">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </Carousel>
        </div>

    )
}

export default Carousel1