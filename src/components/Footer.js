import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='contact'>
            Contact Me
            </div>
            <div className='contact-icons'>
                <a href='https://angel.co/u/jae-young-hwang'><i className="fa-brands fa-angellist"></i></a>
                <a href='https://github.com/jaeyoungh1'><i className="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/jae-hwang-71654490/'><i className="fa-brands fa-linkedin"></i></a>
                <a href='mailto:jyng.hwng.dev@gmail.com?subject=Interview Invitation From <Your Company>'><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    )
}