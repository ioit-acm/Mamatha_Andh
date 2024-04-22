import React from "react";

const Header2 = ()=> {

    return(
        <div class="cont-sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <p>Contact No : <a href="tel: +919960070360">+91 9960070360</a></p>
                </div>
                <div class="col-lg-6">
                    <div class="social">
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/facebook.png`} alt="facebook" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/instagram.png`} alt="instagram" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/youtube.png`} alt="youtube" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="linkedin" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/gmail.png`} alt="gmail" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Header2;