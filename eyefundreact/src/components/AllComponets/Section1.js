import React from "react";

const Section1 = () => {

    return (
        <div>
            <section class="home-sec" id="home">
                <div class="container">
                    <div class="home-content">
                        <div class="row">
                            <div class="col-lg-6 align-item-center">
                                <div class="home-info">
                                    <h1>Alone we can do little, together we can do so much</h1>
                                    <h2>We <span>Anath Kalyan Kendra</span> manage wastage for blind people</h2>
                                    <p>Make a difference today: donate to Anath Kalyan Kendra and help improve lives.</p>
                                    <div class="buttons">
                                        <a href="#contact" class="btn1">Donate now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 order-first order-lg-last">
                                <div class="img-sec">
                                    <img src={`${process.env.PUBLIC_URL}/miss/img-1.png`} alt="gmail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1;