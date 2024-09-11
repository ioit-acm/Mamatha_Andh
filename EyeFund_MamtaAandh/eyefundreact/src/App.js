import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/AdminComponets/Login';
import Thankyou from './components/AllComponets/Thankyou';
import { AllAdminRoutes } from './components/AdminComponets/AllAdminRoutes';
import ClothesForm from './components/Forms/ClothesForm';
import FundForm from './components/Forms/FundForm';
import StationaryForm from './components/Forms/StationaryForm';
import HomeComponent from './components/HomeComponent';
import Activity from './components/AllComponets/Activity';


function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeComponent />
      },
      {
        path: "/donate/cloths",
        element: <ClothesForm />,
      },
      
      {
        path: "/donate/fund",
        element: <FundForm />,
      },
      {
        path: "/donate/stationary",
        element: <StationaryForm />,
      },
      {
        path: "/thankyou",
        element: <Thankyou />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/admin",
        element: <AllAdminRoutes compo="Trail" />
      },
      {
        path: "/admin/cloth",
        element: <AllAdminRoutes compo="ClothDonation" />
      },
      {
        path: "/admin/stationary",
        element: <AllAdminRoutes compo="StationaryDonation" />
      },
      {
        path: "/admin/fund",
        element: <AllAdminRoutes compo="FundDonation" />
      },

    ]
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

