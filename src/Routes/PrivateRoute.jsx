import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location  = useLocation();

    const { user, loading } = useContext(AuthContext)
    if(loading){
        return <div className='flex min-h-screen justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;