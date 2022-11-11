import React from 'react'
import water from '../icons/water2.mp4'
import me from '../icons/me2.jpg'
import './Body.css'

export default function Body() {

    return (
        <>
            <div className='body'>
                <video src={water} autoPlay loop muted playsInline />
            </div>
            <div className='aboutme'>
                <img className='profpic' alt='me' src={me}/>
                <p className='desc'>
                    I'm a full-stack software engineer based in the South Bay, who's passionate about 
                    web development. I love the relationship between function and aesthetic, and finding creative solutions
                    to problems.
                    
                    I'm a team players who's always down to take on the challenge of struggling through an interesting puzzle.
                    I also have a personal passion for coffee, cats, and corny jokes 🌽 .
                </p>
            </div>
            <div className='technologies'>
                <div className='div-title'>Technologies</div>
                <div className='tech-icons'>
                    <img alt='git' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                    <img alt='express' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img alt='heroku' height='80' width='80'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
                    <img alt='css3' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                    <img alt='docker' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                    <img alt='html5' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                    <img alt='flask' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                    <img alt='react' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img alt='redux' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img alt='sequelize' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />
                    <img alt='sqlite' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg" />
                    <img alt='sqlalchemy' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />
                    <img alt='postgresql' height='80' width='80'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                    <img alt='python' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    <img alt='javascript' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img alt='nodejs' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                          </div>
            </div>
        </>
    )
}