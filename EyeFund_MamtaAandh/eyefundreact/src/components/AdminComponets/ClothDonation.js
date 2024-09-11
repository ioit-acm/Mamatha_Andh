import React, { useState, useEffect } from 'react';
import { ClothCard } from './ClothCard';
import Footer from "../AllComponets/Footer";
import { AdminHeader } from './AdminHeader';

const ClothDonation = ({onLogout}) => {
    const [clothsData, setClothsData] = useState([]);

    const handleClothDelete = (id) => {
        setClothsData(clothsData.filter((cloth) => cloth._id !== id));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/donationApi/cloth'); // Replace with your API endpoint
                const data = await response.json();
                setClothsData(data);
            } catch (error) {
                console.error('Error fetching cloth data:', error);

            }
        };

        fetchData();
    }, []);

    
    return (
        <div>
            <AdminHeader onLogout={onLogout}/>
            <div className="cloth-list">
                {clothsData.map((cloth) => (
                    <ClothCard key={cloth._id} data={cloth} onDelete={handleClothDelete} /> // Use cloth._id for unique key
                ))}
                {clothsData.length === 0 && <p>No cloths found in the database.</p>}
                <Footer />
            </div>
        </div>
    );
}

export default ClothDonation;