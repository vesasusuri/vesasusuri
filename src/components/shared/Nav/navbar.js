import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FormattedMessage } from 'react-intl'
import "./styles/navbar.scss";
import { MainData2 } from './Megamenus/data'
import MobileNav from ".././MobileNav/MobileNav"
import clsx from "clsx"
const BottomNav = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const nav = document.querySelector(".navbar");
        const navHeight = nav.scrollHeight;

        const handleScroll = () => {
            const scrollHeight = window.pageYOffset;
            setIsSticky(scrollHeight > 20 ? true : false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div id="navbar" className={clsx(`navbar`, isSticky ? "nav__sticky" : "")}>
            <MobileNav />
            <div className='bottom-nav'>
                <div className="left-logo-container">
                    <Link to='/' className='logo'>
                        <div className='inner-logo'>
                        </div>
                    </Link>
                    {/* <div className="apps-container">
                        <button className="button app-button">
                            <MdApps />
                        </button>
                    </div> */}
                </div>

                <div className='nav-links'>
                    {MainData2.map((props) => {
                        return (
                            <div className={`nav-link ${props.cls}`}>
                                <Link to={props.to} className='inner-nav-link'>
                                    {props.link}
                                    {props.megamenu ? <MdKeyboardArrowDown className='arrow1' /> : null}
                                </Link>
                                {props.megamenu}
                            </div>
                        )
                    })}

                </div>

                <div className='nav-auth'>
                    <Link to='/login' className='link1'>
                        <FormattedMessage id='.logIn()' defaultMessage='.logIn()' />
                    </Link>
                    <Link to='/signup' className='link2'>
                        <FormattedMessage id='.signUp()' defaultMessage='.signUp()' />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default BottomNav
