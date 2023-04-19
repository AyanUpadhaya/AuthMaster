import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Home = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            {user}
        </div>
    );
};

export default Home;