import React from "react";

const Section4 = () => {

    return (
        <div>
            <div class="about-sec" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 about-img">
                            <img src={`${process.env.PUBLIC_URL}/miss/img-2.jpeg`} alt="donamtion" />
                        </div>
                        <div class="col-lg-8 order-first order-lg-last">
                            <div class="heading">
                                <h2>What We Do & Why We Do</h2>
                            </div>
                            <p>At Eye Fund, we believe that everyone deserves the chance to live a healthy and fulfilling life. Our mission is to improve the lives of blind people in need by providing access to basic necessities such as food, shelter, education, and healthcare. We work tirelessly to identify the most pressing needs in our community and develop programs and initiatives to address those needs. </p>
                            <p>Through our fundraising efforts and the generous support of our donors, we are able to make a positive impact on the lives of thousands of people every year. Whether it's providing a warm meal to someone in need or helping a child receive an education, we are dedicated to making a difference in our community and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section4;