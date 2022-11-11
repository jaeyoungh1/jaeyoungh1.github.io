import React, {useState} from 'react';
import './Navbar.css'
import menu from '../icons/menu.svg'
import logo from '../icons/logo.svg'


export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
        <nav>
            <div className='logo'>
                {/* <img className='logo' alt='menu' src={logo} /> */}
                JH

            </div>
            <div className='my-info'>
                <div className='name'>
                    Jae Hwang
                </div>
                <div className='title'>
                    Full-Stack Software Engineer
                </div>
            </div>
            <div className='left'>
                <img className='menu-icon' alt='menu' src={menu}
                onClick={() => setOpenMenu(!openMenu)}/>
            </div>
            {openMenu && (
                <div className='menu' >
                    <div>About Me</div>
                    <div></div>
                </div>
            )}
        </nav>
        </>
    )
}