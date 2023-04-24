import React from "react";
import facebookIcon from "../img/icon-facebook.svg"
import twiterIcon from "../img/icon-twiter.svg"
import instagramIcon from "../img/icon-instagram.svg"


const Footer = () => {
    return (
        <div class="footer">
            <div><img src={require('../img/logo-dark.png')} alt="logo"/></div>

            <div class="medias">
                <div>
                    <img src={facebookIcon} alt="facebook-icon"/>
                </div>
                <div>
                    <img src={twiterIcon} alt="twiter-icon"/>
                </div>
                <div>
                    <img src={instagramIcon} alt="instagram-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;