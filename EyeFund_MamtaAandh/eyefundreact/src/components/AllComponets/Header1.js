import React from "react";
import { Link } from "react-router-dom";

const Header1 = ()=> {


    return(
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <Link class="navbar-brand" to="#home">Mamata Andh - Anath Kalyan Kendra</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/" >Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/donate/fund" >Donate</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/activity">Activity's</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header1;