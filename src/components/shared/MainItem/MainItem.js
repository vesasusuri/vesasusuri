import React from 'react'
import './MainItem.scss'
import { Link } from 'react-router-dom'

const MainItem = (props) => {
    return (
        <div className='shared-main-item1'>
            {props.logo1 ? 
                <div className="logo logo1" 
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    style={{content: `url(${props.logo1})`}}></div> 
            : null}
            {props.logo2 ? 
                <div className="logo logo2" 
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    style={{content: `url(${props.logo2})`}}></div> 
            : null}
            {props.subtitle ? 
                <h5 className='shared-h5' data-aos="fade-right"
                data-aos-easing="ease-in-sine">{props.subtitle}</h5> 
            : null }
            {props.title ? 
                <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">{props.title}</h1> 
            : null }
            {props.text ? 
                <p className='shared-text' data-aos="fade-right"
                data-aos-easing="ease-in-sine">{props.text}</p> 
            : null }
            {props.to1 ? 
                <div className="links">
                    <Link to={props.to1} className='hover-button'>{props.link1}</Link> 
                    {props.to2 ? <Link to={props.to2} className={`${props.style}`}>
                        {props.icon2 ? <>{props.icon2}</> : null}
                        {props.link2}
                    </Link> : null}
                    {props.to3 ? <Link to={props.to3} className='link3'>
                        {props.link3}
                    </Link> : null}
                </div>
            : null }
        </div>
    )
}

export default MainItem