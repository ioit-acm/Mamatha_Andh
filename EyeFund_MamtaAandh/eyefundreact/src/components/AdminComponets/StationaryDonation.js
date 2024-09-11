import React, { useEffect, useState } from 'react';
import Footer from "../AllComponets/Footer";
import { AdminHeader } from './AdminHeader';
import StationaryCard from './StationaryCard';

const StationaryDonation = ({onLogout}) => {
    const [stationaryData, setStationaryData] = useState([]);

    const handleStationaryDelete = (id) => {
        setStationaryData(stationaryData.filter((cloth) => cloth._id !== id));
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/donationAPI/stationary'); // Replace with your API endpoint
                const data = await response.json();
                setStationaryData(data);
            } catch (error) {
                console.error('Error fetching stationary data:', error);

            }
        };

        fetchData();
    }, []);

    
    return (
        <div>
            <AdminHeader onLogout={onLogout}/>
            <div className="stationary-list">
                {stationaryData.map((stationary) => (
                    <StationaryCard key={stationary._id} data={stationary} onDelete={handleStationaryDelete} /> // Use cloth._id for unique key
                ))}
                {stationaryData.length === 0 && <p>No stationary found in the database.</p>}
                <Footer />
            </div>
        </div>
    );
}

export default StationaryDonation;