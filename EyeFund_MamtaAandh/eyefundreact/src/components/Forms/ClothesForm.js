import React, { useState } from "react";
import HeaderSectionFinal from "../AllComponets/HeaderSectionFinal";
import ContactForm from "../AllComponets/ContactForm";
import Footer from "../AllComponets/Footer";
import Thankyou from "../AllComponets/Thankyou";
import { Navigate, useNavigate } from "react-router-dom";

const ClothesForm = () => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        clothType: 'Men'
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/donationApi/cloth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                console.log('Form data submitted successfully');
                navigate('/thankyou');
                // navigate('/thankyou');
            } else {
                console.error('Form data submission failed');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };


    return (
        <>
            <HeaderSectionFinal />
            <div class="container" style={{ marginTop: 150 }}>
                <div class="heading">
                    <h2>Donate Used Clothes</h2>
                    <p>Plese Donate good condition cloths only !<span>Donation</span></p>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-5">
                        {/* <form class="contact-form"> */}
                            <div class="col-lg-10">
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone Number</label>
                                        <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="clothType">How can where this cloths?</label>
                                        <select className="form-control" id="clothType" name="clothType" value={formData.clothType} onChange={handleChange}>
                                            <option value="Men">Men</option>
                                            <option value="Women">Women</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Donate</button>
                                </form>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </>
    )
}

export default ClothesForm;