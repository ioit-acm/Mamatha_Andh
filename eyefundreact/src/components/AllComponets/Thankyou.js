import React from "react";
import HeaderSectionFinal from "./HeaderSectionFinal";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Thankyou = () => {

    return (
        <>
            <HeaderSectionFinal />
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"><span style={{color:"#41f710"}}>Thankyou for Donation</span> </h5>
                    <h6 class="card-subtitle mb-2 text-muted">Your Contribution is valuable</h6>
                    <p class="card-text">We are incredibly grateful for your recent donation to support blind individuals. Your generosity and compassion are truly appreciated, and your contribution will make a meaningful difference in the lives of those who are visually impaired.</p>
                    <a href="#" class="card-link">Home Page</a>
                </div>
                <ContactForm />
                <Footer />
            </div>
        </>
    )
}

export default Thankyou;