import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar  bg-primary text-primary-content">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link to ="/">Home</Link></li>
                
                <li><Link to ="/register">Register</Link></li>
                <li><Link to ="/login">Login</Link></li>
                <li>{
                    user?
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-secondary'>Logout</button>
                    </>
                    : <Link to ="/login">Login</Link>
                }</li>
            </ul>
        </div>
        </div>
    );
};

export default Header;