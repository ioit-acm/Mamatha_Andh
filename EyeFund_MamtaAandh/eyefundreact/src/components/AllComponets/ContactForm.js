import React from "react";

const ContactForm = () => {

    return (
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="heading">
                    <h2>Contact us</h2>
                    <p>Fill this form, our NGO will contact you for <span>Donation</span></p>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-5">
                        <form class="contact-form">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Mobile No."/>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <select name="donation" id="donation">
                                                        <option value="">Choose Donation or Wastage</option>
                                                        <option value="food">Food</option>
                                                        <option value="clothes">Clothes</option>
                                                        <option value="footware">Footware</option>
                                                        <option value="books">Books</option>
                                                        <option value="fund">Fund</option>
                                                        <option value="gadget">Ele. Gadgets</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Address"/>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" name="text" id="" cols="90" rows="1" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-3">
                                            <a href="#" class="btn1 mt-5">Submit Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm;