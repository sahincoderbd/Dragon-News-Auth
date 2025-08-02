import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Career from "../Pages/Career.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import NewsDetails from "../Components/NewsDetails.jsx";
import CategoryArchive from "../Pages/CategoryArchive.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/news/:_id',
                element:<PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader: async({params})=>{
                 const response = await fetch(`https://openapi.programming-hero.com/api/news/${params._id}`)
                  if(!response.ok){
                    throw new Error('Failed to fetch news details');
                  }
                  const data =await response.json();
                  return data.data;
                }
                   
            },
        ]
    }
])

export default routes;