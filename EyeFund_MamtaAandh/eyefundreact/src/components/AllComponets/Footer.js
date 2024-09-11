import React from "react";

const Footer = ()=> {

    return(
        <footer>
        <div class="container">
            <div class="row">

                <div class="col-lg-4">
                    <div class="col-one">
                        <h4>Mamata Andh - Anath Kalyan Kendra</h4>
                        <p>Address : Near Bhairavnath Temple, Pippale Gurav, Pune - 411061</p>
                        <p>Contact No : <a href="tel: +91 9960070360">+91 9960070360</a></p>
                        <p>Email : <a href="mailto:tusharkamle996@gmail.com">tusharkamle996@gmail.com</a></p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="col-two">
                        <h4>Important Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#donation">Donations</a></li>
                            <li><a href="#mission-id">Missions</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="col-one">
                        <h4>Social Media</h4>
                        <div class="social">
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/facebook.png`} alt="facebook" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/instagram.png`} alt="instagram" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/youtube.png`} alt="youtube" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/linkedin.png`} alt="linkedin" /></a>
                        <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/gmail.png`} alt="gmail" /></a>
                        </div>
                        <p>Copyright &copy; 2024 | All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;