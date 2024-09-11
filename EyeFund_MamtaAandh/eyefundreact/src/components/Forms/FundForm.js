import React, { useState } from "react";
import HeaderSectionFinal from "../AllComponets/HeaderSectionFinal";
import ContactForm from "../AllComponets/ContactForm";
import Footer from "../AllComponets/Footer";
import { useNavigate } from "react-router-dom";

const FundForm = () => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        dname: '',
        demail: '',
        number: '',
        amt: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/donationApi/fund', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
                navigate('/thankyou');
                // Reset form fields after successful submission if needed
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
                    <h2>Donate Money</h2>
                    <p>You can get the receipt for your income tax<span> exemption</span></p>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-5">
                        <div class="col-lg-10">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="dname" name="dname" value={formData.name} onChange={handleChange} placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="demail" name="demail" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Phone Number</label>
                                    <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} placeholder="Enter Phone Number" />
                                </div>
                                <div class="form-group">
                                    <label for="amount">Amount</label>
                                    <input type="number" name="amt" className="form-control" id="amt" value={formData.amount} onChange={handleChange} placeholder="Enter donation amount" />
                                </div>

                                <button type="submit" className="btn btn-primary">Donate</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </>
    )
}

export default FundForm;