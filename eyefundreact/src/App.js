import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ClothesForm from './components/Forms/ClothesForm';
import FundForm from './components/Forms/FundForm';
import StationaryForm from './components/Forms/StationaryForm';
import HomeComponent from './components/HomeComponent';
import Thankyou from './components/AllComponets/Thankyou';


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

    ]
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;



{/* <img src={logo} className="App-logo" alt="logo" /> */ }