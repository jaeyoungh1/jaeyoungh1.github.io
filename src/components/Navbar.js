import React, { useState } from 'react';
import './Navbar.css'
import menu from '../icons/menu.svg'

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    function scrollTo(str) {
        let ele = document.querySelector(`.${str}`)
        console.log("ELE", ele)
        if (str === 'technologies') {
            ele.scrollIntoView({ behavior: 'smooth', block: 'center'})

        } else {

            ele.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <nav>
                <div className='logo'>
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
                        onClick={() => setOpenMenu(!openMenu)} />
                </div>
                {openMenu && (
                    <div className='menu' >
                        <div onClick={() => scrollTo('technologies')}>Technologies</div>
                        <div onClick={() => scrollTo('projects')}>Projects</div>
                        <div onClick={() => scrollTo('contact')}>Contact Me</div>
                    </div>
                )}
            </nav>
        </>
    )
}