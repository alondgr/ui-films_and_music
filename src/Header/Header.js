import React from 'react';
import './Header.scss';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import Logo from './Logo/Logo';


export default function Header() {
    return (
        <div className='Header'>
            <Logo />
            <HeaderProfile />
        </div>
    )
}
