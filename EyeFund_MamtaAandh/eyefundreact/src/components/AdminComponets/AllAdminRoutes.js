import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClothDonation from './ClothDonation';
import FundDonation from './FundDonation';
import StationaryDonation from './StationaryDonation';
import Trail from './Trail';

export const AllAdminRoutes =({ compo })=> {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    } else {

      navigate('/login'); 
    }
  }, []); 

  const handleLogout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  const components = {
    Trail: () => <Trail onLogout={handleLogout} />,
    ClothDonation: () => <ClothDonation onLogout={handleLogout} />,
    StationaryDonation: () => <StationaryDonation  onLogout={handleLogout} />,
    FundDonation: () => <FundDonation  onLogout={handleLogout} />,
  };

  if (!components.hasOwnProperty(compo)) {
    return <p>Invalid component name: {compo}</p>;
  }

  return isLoggedIn ? (
    <div>
      {components[compo]()} 
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  ) : (
    <p>Please login to access protected content.</p>
  );
}

export default AllAdminRoutes;
