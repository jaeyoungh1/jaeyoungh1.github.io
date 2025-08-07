import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'
import menu from '../icons/menu.svg'

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    function scrollTo(str) {
        let ele = document.querySelector(`.${str}`)
        if (str === 'technologies' || str==='aboutme') {
            ele.scrollIntoView({ behavior: 'smooth', block: 'center' })

        } else {

            ele.scrollIntoView({ behavior: 'smooth' })
        }
    }


    useEffect(() => {
        if (!openMenu) return;

        const closeMenu = () => {
            setOpenMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [openMenu]);


    return (
        <>
            <nav>
                <div className='logo'>
                    <a href='/Jae_Hwang_Resume_2025.pdf' download>JH</a>
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
                        onClick={() => setOpenMenu(!openMenu)} />
                </div>
                {openMenu && (
                    <div className='menu' >
                        <div className='scroll' onClick={() => scrollTo('aboutme')}>About Me</div>

                        <div className='scroll' onClick={() => scrollTo('technologies')}>Technologies</div>
                        <div className='scroll' onClick={() => scrollTo('projects')}>Projects</div>
                        <div>
                        <a className='scroll' href='/Jae_Hwang_Resume_2025.pdf' download>Resume</a>
                        </div>
                        <div className='scroll' onClick={() => scrollTo('contact')}>Contact Me</div>
                    </div>
                )}
            </nav>
        </>
    )
}