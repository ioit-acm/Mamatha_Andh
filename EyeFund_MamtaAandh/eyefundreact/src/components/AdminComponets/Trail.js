import React from "react";
import Footer from "../AllComponets/Footer";
import { AdminHeader } from "./AdminHeader";

const Trail = ({ onLogout }) => {

    return (
        <div>
            <AdminHeader onLogout={onLogout} />
            <div style={{margin:20, width:1000}}>
                <div class="card">
                    <div class="card-header">
                        Blind Pepple
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>Blindness poses unique challenges in navigating the world, and NGOs (Non-Governmental Organizations) dedicated to supporting the blind play a crucial role in enhancing their quality of life. These organizations often provide a range of services aimed at empowering blind individuals, including education, vocational training, access to assistive technologies, and advocacy for equal rights and opportunities. For example, the "Vision for All" NGO in India offers educational programs tailored to the needs of visually impaired students, ensuring they receive a quality education regardless of their disability.
                            </p>

                        </blockquote>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Trail;