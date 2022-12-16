import React, { useState } from 'react';
import { BiCog, BiEnvelope } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FooterData } from './FooterData'
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import './styles/footer.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher';

const Footer = (props) => {

    const [email, setEmail] = useState('');
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    const [settings, setSettings] = useState(false);
    const showSettings = () => {
        setSettings(!settings);
    }


    return(
        <div className='shared-footer'>
            <div className='shared-footer1'>
            <div className="shared-white-logo"></div>
            <p className='p2'>Follow us:</p>
            </div>
            <div className="first-row">
                
                <div className="left">
                                   
                </div>
                <div className="buttons">
                    {/* <button>
                        <div className="icon icon2"></div>
                        <div className="block">
                            <small>Download on the</small>
                            <h5>App Store</h5>
                        </div>
                    </button>
                    <button className='button1'>
                        <div className="icon icon1"></div>
                        <div className="block">
                            <small>GET IT ON</small>
                            <h5>Google Play</h5>
                        </div>
                    </button> */}
                </div> 
                <div className="left">
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaLinkedinIn /></a>
                </div>
            </div>
{/* 
            <div className='all-footer-links'>
                {FooterData.map((props) => {
                    return(
                        <div className="footer-list">
                            <h6>{props.category}</h6>
                            <div className="links">
                                {props.links.map((l) => {
                                    return (
                                        <Link key={l.to} to={l.to} className="footer-item">
                                            {l.link}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </div> */}
            
             <div className="second-row">
                    <p className="sub">
                        <FormattedMessage id='subscribe-to-our-newsletter' 
                        defaultMessage='Subscribe to our newsletter' />
                    </p>
                <div className="email-container">
                  
                    <form action=''>
                        <span><BiEnvelope /></span>
                        <input type="email" 
                            value={email}
                            name='email'
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                        />
                        <button type='submit'>
                            <FormattedMessage id='Subscribe' defaultMessage='Subscribe' />
                        </button>
                    </form>
                </div>
            </div> 

            <div className="third-row">
                <p className='p2'>
                    <FormattedMessage id='footer-p2' 
                    defaultMessage='© 2022 Digi Lab. All rights reserved.' />
                </p>
                
             

                <div className="right">
                   {/* <ThemeSwitcher /> */}
                    {/* <div className="settings-container">
                        <div className="settings-icon" onClick={showSettings}>
                            <BiCog className='icon1' />
                            <MdKeyboardArrowDown className='icon2' />
                        </div>
                        {settings ? <SettingsMenu /> : null }
                    </div> */}
                     <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />

                </div>
            </div>

        </div>
    )
};

export default Footer;