import React from 'react';
import {
    Navigate,
    createBrowserRouter,

} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import News from '../pages/News/News';
import NewsLayout from '../layout/NewsLayout';
import Login from '../pages/Login/Login/Login';
import LoginLayout from '../layout/LoginLayout';
import Reg from '../pages/Login/Reg/Reg';
import ProtectedRoute from './ProtectedRoute';
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={`/category/0`}></Navigate>

            }
             ,
            
            {
                path: "/login",
                element: <Login></Login>,


            }
            ,
            {
                path:"/reg",
                element:<Reg></Reg>
            }



        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-mu-henna.vercel.app/category/${params.id}`)
            }
       
        ]
    }
    ,
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <ProtectedRoute><News></News></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-mu-henna.vercel.app/news/${params.id}`)
            }
            ,


        ]

    }
    ,

]);

export default router;