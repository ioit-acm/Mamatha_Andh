import React from "react";

const Section2 = () => {

    return (
        <div>
            <div class="don-sec" id="donation">
                <div class="container">
                    <div class="heading">
                        <h2>Contribute to betterment for blind  </h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/clothing.png`} alt="clothing" />
                                <h3>Clothes</h3>
                                <p>Give your clothes a second chance: donate them today and help make a difference.</p>
                                <a href="/donate/cloths" class="btn1">Donate Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/sneakers.png`} alt="sneakers" />
                                <h3>Footware</h3>
                                <p>Step up and make a difference: donate your footwear today and help those in need.</p>
                                <a href="#contact" class="btn1">Donate Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/salary.png`} alt="salary" />
                                <h3>Fund</h3>
                                <p>Your donation can make a world of difference: give today to support our cause and help those in need.</p>
                                <a href="/donate/fund" class="btn1">Donate Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/gadgets.png`} alt="gadgets" />
                                <h3>Gadgets</h3>
                                <p>Unlock the power of giving: donate your gadgets today and help bridge the digital divide for those in need.</p>
                                <a href="#contact" class="btn1">Donate Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/book.png`} alt="book" />
                                <h3>Stationary</h3>
                                <p>Make a mark in someone's life: donate your stationery today and help provide educational resources for those in need.</p>
                                <a href="/donate/stationary" class="btn1">Donate Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="don-box">
                                <img src={`${process.env.PUBLIC_URL}/don/shopping-bag.png`} alt="shopping bag" />
                                <h3>Food</h3>
                                <p>Feed a hungry mouth today: donate food and help fight hunger in your community.</p>
                                <a href="#contact" class="btn1">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section2;