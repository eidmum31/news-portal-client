import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import ContentLoader from 'react-content-loader'

const MyLoader = () => <ContentLoader />
const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    
    if(loading)
        return <div className='mt-5'>
             <MyLoader></MyLoader>
        </div>
    if(user)
        return children;
    return <Navigate state={location.pathname} to={`/login`}></Navigate>;

};

export default ProtectedRoute;