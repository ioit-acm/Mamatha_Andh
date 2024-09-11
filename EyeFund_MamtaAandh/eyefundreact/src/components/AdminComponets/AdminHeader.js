import React from "react"
import { Link } from "react-router-dom"

export const AdminHeader = ({onLogout}) => {


    
    return (
        <div style={{marginBottom:20}}>
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <Link class="navbar-brand" to="/admin">Mamata Andh - Anath Kalyan Kendra</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/admin">Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/admin/cloth">Cloth Donation </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/admin/fund">Fund Donation</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/admin/stationary">Stationary Donation</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#about" onClick={onLogout}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}
