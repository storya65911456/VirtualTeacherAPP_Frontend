import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auth = ({ children }) => {
    const state = useSelector((state) => state.user);

    if (state?.profile?.identity == 1) return children;
    return <Navigate to='/' />;
};

const AuthAdmin = ({ children }) => {
    const state = useSelector((state) => state.user);

    if (state?.profile?.identity == 2) return children;
    return <Navigate to='/' />;
};

export { Auth, AuthAdmin };
