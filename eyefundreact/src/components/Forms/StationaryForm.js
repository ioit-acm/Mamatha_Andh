import React, { useState } from "react";
import Footer from "../AllComponets/Footer";
import ContactForm from "../AllComponets/ContactForm";
import HeaderSectionFinal from "../AllComponets/HeaderSectionFinal";

const StationaryForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        stationary: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/donationApi/stationary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
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
                    <h2>Donate Used Clothes</h2>
                    <p>Plese Donate good condition cloths only !<span>Donation</span></p>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-5">
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
                                    <label htmlFor="stationary">Enter Stationary type</label>
                                    <select className="form-control" name="stationary" id="stationary" value={formData.stationary} onChange={handleChange}>
                                        <option value="Pen">Pen</option>
                                        <option value="Books">Books</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stationaryName">Item name</label>
                                    <input type="text" className="form-control" name="stationaryName" id="stationaryName" value={formData.stationaryName} onChange={handleChange} placeholder="Enter Item name" />
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

export default StationaryForm;