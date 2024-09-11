import React from "react";
import HeaderSectionFinal from "./HeaderSectionFinal";
import Footer from "./Footer";

const Activity = () => {

    return (
        <>
        <HeaderSectionFinal />
        <section class="mission" id="mission-id">
            <div class="container">
                <div class="heading">
                    <h2>Our Missions</h2>
                    <p>We have delivered <span>Wastage</span> or <span>Donations</span> to needy Peoples</p>
                </div>
                <div class="gallery-sec" style={{margin:50}}>
                    <div class="container">
                        <div class="image-container">
                            <img style={{marginLeft:300}} src={`${process.env.PUBLIC_URL}/miss/1.jpg`} alt="donamtion" />
                            <img src={`${process.env.PUBLIC_URL}/miss/2.jpg`} alt="donamtion" />
                            <img src={`${process.env.PUBLIC_URL}/miss/3.jpg`} alt="donamtion" />
                            <img src={`${process.env.PUBLIC_URL}/miss/4.jpg`} alt="donamtion" />
                            <img src={`${process.env.PUBLIC_URL}/miss/5.jpg`} alt="donamtion" />
                            <img src={`${process.env.PUBLIC_URL}/miss/6.jpg`} alt="donamtion" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Activity;