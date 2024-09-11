import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {

    return (
        <div class="cont-sec">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p>Contact No : <Link to="tel: +919960070360">+91 9960070360</Link></p>
                    </div>
                    <div class="col-lg-6">
                        <div class="social">
                            <Link to="#"><img src={`${process.env.PUBLIC_URL}/icons/facebook.png`} alt="facebook" /></Link>
                            <Link to="#"><img src={`${process.env.PUBLIC_URL}/icons/instagram.png`} alt="instagram" /></Link>
                            <Link to="#"><img src={`${process.env.PUBLIC_URL}/icons/youtube.png`} alt="youtube" /></Link>
                            <Link to="#"><img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="linkedin" /></Link>
                            <Link to="#"><img src={`${process.env.PUBLIC_URL}/icons/gmail.png`} alt="gmail" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header2;