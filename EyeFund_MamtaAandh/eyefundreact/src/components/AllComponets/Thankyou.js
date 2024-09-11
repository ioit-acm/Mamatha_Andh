import React from "react";
import HeaderSectionFinal from "./HeaderSectionFinal";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Thankyou = () => {

    return (
        <>
            <HeaderSectionFinal />
            <div className="card" style={{ width: 1200, marginTop: 180 }}>
                <div className="card-body text-center">
                    <h1 class="card-title"><span style={{ color: "#41f710" }}>Thankyou for Donation</span> </h1>
                    <h4 class="card-subtitle mb-2 text-muted my-3">Your Contribution is valuable</h4>
                    <h6 className="card-text my-4">We are incredibly grateful for your recent donation to support blind individuals. Your generosity and compassion are truly appreciated, and your contribution will make a meaningful difference in the lives of those who are visually impaired.</h6>
                    <button className="btn" style={{border:"solid blue" , background:"#d6d4f8"}}>

                    <Link to="/" class="card-link">Home Page</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Thankyou;