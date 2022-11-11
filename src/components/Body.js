import React from 'react'
import water from '../icons/water2.mp4'

export default function Body() {

    return (
        <div className='body'>
            <video src={water} autoPlay loop muted playsInline />
        </div>
    )
}