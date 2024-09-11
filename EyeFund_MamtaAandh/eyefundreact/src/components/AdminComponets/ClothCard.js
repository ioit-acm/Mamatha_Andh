import React from "react";

export const ClothCard = ({ data }) => {

    

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/donationApi/cloth/${data._id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Cloth deleted successfully');

            } else {
                console.error('Error deleting cloth:', await response.text());

            }
        } catch (error) {
            console.error('Error deleting cloth:', error);

        }
    };

    return (
        <div style={{ margin: 30, width: 1000 }}>
            <div class="card text-white bg-info mb-3">
                <h5 class="card-header">{data.name}</h5>
                <div class="card-body">
                    <h6 class="card-title"><b>Email</b> - {data.email}</h6>
                    <h6 class="card-title"><b>Phone Number</b> - {data.number}</h6>
                    <h6 class="card-title"><b>Cloth for</b> - {data.clothType}</h6>
                    <a href="#" className="btn btn-primary" onClick={handleDelete}> Delete </a>
                </div>
            </div>

        </div>
    )
}