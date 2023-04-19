import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Home = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            {user.email}
        </div>
    );
};

export default Home;