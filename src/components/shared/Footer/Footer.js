import './styles/footer.scss'
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FooterData } from './data'
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = (props) => {
    return(
        <div className='shared-footer'>
            <div className='all-footer-links'>
                {FooterData.map((props) => {
                    return(
                        <div className="footer-list" key={props.id}>
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
            </div>

            <div className="third-row">
                <div className="p">© 2022 - Digilab-pz</div>
                <div className="right-side">
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                </div>
            </div>

            <div className="last-row">
                <div className="center-links">
                    <Link to='/'>
                        <FormattedMessage id='privacy-policy' defaultMessage='Privacy Policy' />
                    </Link>
                    <span>&nbsp; - &nbsp;</span>
                    <Link to='/'>    
                        <FormattedMessage id='terms-&-conditions' defaultMessage='Terms & Conditions' />
                    </Link>
                    <span>&nbsp; - &nbsp;</span>
                    <Link to='/'>    
                        <FormattedMessage id='cookies-policy' defaultMessage='Cookies Policy' />
                    </Link>
                </div>

                <div className="social-medias">
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaLinkedinIn /></a>
                    <a href='#'><FaYoutube /></a>
                </div>
            </div>

        </div>
    )
};

export default Footer;
