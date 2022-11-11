import React from 'react';
import './Navbar.css'
import menu from '../icons/menu.svg'
import logo from '../icons/logo.svg'


export default function Navbar() {

    return (
        <nav>
            <div className='right'>
                <img className='logo' alt='menu' src={logo} />

            </div>
            <div>

                <div className='name'>
                    Jae Hwang
                </div>
                <div className='title'>
                    Full-Stack Software Engineer
                </div>
            </div>
            <div className='left'>
                <img className='menu' alt='menu' src={menu} />
            </div>

        </nav>
    )
}