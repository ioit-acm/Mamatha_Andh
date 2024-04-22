import React from "react";
import HeaderSectionFinal from "./AllComponets/HeaderSectionFinal";
import Section1 from "./AllComponets/Section1";
import Section2 from "./AllComponets/Section2";
import Section4 from "./AllComponets/Section4";
import ContactForm from "./AllComponets/ContactForm";
import Footer from "./AllComponets/Footer";



const HomeComponent = () => {

    return (
        <div>
            <HeaderSectionFinal />
            <Section1 />
            <Section2 />
            {/* <Section3 /> */}
            <Section4 />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default HomeComponent;