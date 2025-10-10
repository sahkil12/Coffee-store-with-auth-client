import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import UpdateCoffeeData from './Components/UpdateCoffeeData.jsx';
import Loader from './Components/Loader.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/coffee/:id',
        loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
        element:<CoffeeDetails></CoffeeDetails>,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/updateCoffee/:id',
        loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
        element:<UpdateCoffeeData></UpdateCoffeeData>,
        hydrateFallbackElement:<Loader></Loader>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
