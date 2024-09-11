import React, { useEffect, useState } from 'react';
import Footer from "../AllComponets/Footer";
import { AdminHeader } from './AdminHeader';
import FundCard from './FundCard';

const FundDonation = ({onLogout}) => {
    const [fundData, setFundData] = useState([]);

    const handleFundDelete = (id) => {
        setFundData(fundData.filter((cloth) => cloth._id !== id));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/donationAPI/fund'); // Replace with your API endpoint
                const data = await response.json();
                setFundData(data);
            } catch (error) {
                console.error('Error fetching fund data:', error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div>
            <AdminHeader onLogout={onLogout}/>
            <div className="fund-list">
                {fundData.map((fund) => (
                    <FundCard key={fund._id} data={fund} onDelete={handleFundDelete} /> // Use cloth._id for unique key
                ))}
                {fundData.length === 0 && <p>No stationary found in the database.</p>}
                <Footer />
            </div>
        </div>
    );
}

export default FundDonation;