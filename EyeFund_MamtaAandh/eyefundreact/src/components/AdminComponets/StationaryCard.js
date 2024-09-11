import React from "react";
import { Link } from "react-router-dom";

const StationaryCard = ({ data }) => {

    

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/donationAPI/stationary/${data._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('stationary deleted successfully');

            } else {
                console.error('Error deleting stationary:', await response.text());

            }
        } catch (error) {
            console.error('Error deleting stationary:', error);

        }
    };

    return (
        <div style={{ margin: 30, width: 1000 }}>
            <div class="card text-white bg-info mb-3">
                <h5 class="card-header">{data.name}</h5>
                <div class="card-body">
                    <h6 class="card-title"><b>Email</b> - {data.email}</h6>
                    <h6 class="card-title"><b>Phone Number</b> - {data.number}</h6>
                    <h6 class="card-title"><b>stationary type</b> - {data.stationary}</h6>
                    <h6 class="card-title"><b>stationary item</b> - {data.stationaryName}</h6>
                    <Link to="#" className="btn btn-primary" onClick={handleDelete}> Delete </Link>
                </div>
            </div>

        </div>
    )
}

export default StationaryCard;