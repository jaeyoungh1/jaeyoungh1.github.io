import React from 'react'
import water from '../icons/water2.mp4'
import me from '../icons/me2.jpg'
import cawfee from '../icons/cawfee.png'
import './Body.css'

export default function Body() {

    return (
        <>
            <div className='body'>
                <video src={water} autoPlay loop muted playsInline />
            </div>
            <div className='aboutme'>
                <img className='profpic' alt='me' src={me} />
                <p className='desc'>
                    I'm a full-stack software engineer based in the South Bay, who's passionate about
                    web development. I love the relationship between functionality and aesthetic, and finding creative solutions
                    to problems.

                    I'm a team player who's always down to take on the challenge of struggling through an interesting puzzle.
                    I also have a personal passion for coffee, cats, and corny jokes 🌽 . Feel free to contact me for job opportunities,
                    questions, or just to say hi. Hope to sea you soon!
                </p>
            </div>
            <div className='technologies'>
                <div className='div-title'>Technologies</div>
                <div className='tech-icons'>
                    <img alt='git' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                    <img alt='express' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                    <img alt='heroku' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
                    <img alt='css3' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                    <img alt='docker' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
                    <img alt='html5' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                    <img alt='flask' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                    <img alt='react' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                    <img alt='redux' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <img alt='sequelize' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />
                    <img alt='sqlite' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg" />
                    <img alt='sqlalchemy' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />
                    <img alt='postgresql' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                    <img alt='python' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                    <img alt='javascript' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img alt='nodejs' height='80' width='80' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                </div>
            </div>
            <div className='projects'>
                <div className='div-title'>Projects</div>
                <div className='project-preview'>
                    <div className='proj'>
                        <div className='proj-img'>
                            <img alt='cawfee prev' src={cawfee}/>
                        </div>
                        <div className='proj-details'>
                            <div>Drink Cawfee</div>
                            <div>Coffee Curation and Shopping App</div>
                            <div className='line-break'></div>
                            <div>Technologies Used</div>
                            <div>Python, Flask, SQLAlchemy, PostgreSQL, JavaScript, React Redux, Docker</div>
                            <div>Drink Cawfee is a coffee curation and shopping site inspired by Drink Trade. Users are
                                able to curate, review, and buy coffee from local CA roasters.
                                As my second solo full-stack project from start to finish, I chose a site that
                                would challenge both my backend and frontend skills: I had to craft
                                a well-thought-out relational database to ensure curation and shopping were efficient, as 
                                well as be especially detail oriented when creating an intuitive user experience for an eCommerce website.
                            </div>
                            <div>
                                Live Site
                            </div>
                            <div>
                                Github
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}