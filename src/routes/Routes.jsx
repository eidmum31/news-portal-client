import React from 'react';
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import About from '../pages/Home/about/About';
import Career from '../pages/Home/career/Career';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            }
            ,
            {
                path: "/about",
                element: <About></About>
            }
            ,
            {
                path: "/career",
                element: <Career></Career>
            }
        ]
    },
]);

export default router;