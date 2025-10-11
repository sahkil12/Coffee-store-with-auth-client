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
import ErrorPage from './Components/ErrorPage.jsx';
import SignIn from './Auth/SignIn.jsx';
import SignUp from './Auth/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:({params})=> fetch(`https://coffee-shop-server-two-kappa.vercel.app/coffees/${params.id}`),
        element:<CoffeeDetails></CoffeeDetails>,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/updateCoffee/:id',
        loader:({params})=> fetch(`https://coffee-shop-server-two-kappa.vercel.app/coffees/${params.id}`),
        element:<UpdateCoffeeData></UpdateCoffeeData>,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>,
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      },
      {
        path:"users",
        loader:()=> fetch('https://coffee-shop-server-two-kappa.vercel.app/users'),
        element:<Users></Users>,
        hydrateFallbackElement:<Loader></Loader>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
