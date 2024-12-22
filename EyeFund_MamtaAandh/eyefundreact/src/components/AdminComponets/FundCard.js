/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const FundCard = ({ data }) => {

    

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/donationAPI/fund/${data._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('fund deleted successfully');

            } else {
                console.error('Error deleting fund:', await response.text());

            }
        } catch (error) {
            console.error('Error deleting fund:', error);

        }
    };

    return (
        <div style={{ margin: 30, width: 1000 }}>
            <div class="card text-white bg-info mb-3">
                <h5 class="card-header">{data.name}</h5>
                <div class="card-body">
                    <h6 class="card-title"><b>Email</b> - {data.email}</h6>
                    <h6 class="card-title"><b>Phone Number</b> - {data.number}</h6>
                    <h6 class="card-title"><b>stationary type</b> - {data.amount}</h6>
                    <a href="#" className="btn btn-primary" onClick={handleDelete}> Delete </a>
                </div>
            </div>

        </div>
    )
}

export default FundCard;