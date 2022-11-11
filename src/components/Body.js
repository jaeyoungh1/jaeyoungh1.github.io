import React from 'react'
import water from '../icons/water2.mp4'
import me from '../icons/me2.jpg'
import cawfee from '../icons/cawfee.png'
import heirbnb from '../icons/heirbnb.png'
import squeal from '../icons/squeal.png'
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
                    I also find personal joy in coffee, cats, and corny jokes 🌽 . Feel free to contact me for
                    questions, collabs, or just to say hi. Hope to sea you soon!
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
                            <img alt='cawfee prev' src={cawfee} />
                        </div>
                        <div className='proj-details'>
                            <div className='proj-title'>DRINK CAWFEE</div>
                            <div className='proj-subtitle'>Coffee Curation and Shopping App</div>
                            <div className='line-break'></div>
                            <div className='proj-title tech-used'>Technologies Used</div>
                            <div className='tech-used'>Python, Flask, SQLAlchemy, PostgreSQL, JavaScript, React Redux, Docker</div>
                            <div className='proj-desc'>Drink Cawfee is a coffee curation and shopping site inspired by Drink Trade, where users are
                                able to curate, review, and buy coffee from local CA roasters. The project was a reminder to myself to support local roasters,
                                take the occassional coffee break from coding, and to turn my daily morning pourover routine into a mindful ritual. The early bird gets the brew!
                            </div>
                            <div className='buttons'>

                                <a className='button' href='https://drink-cawfee.herokuapp.com'>
                                    Live Site
                                </a>
                                <a className='button' href='https://github.com/jaeyoungh1/drink_cawfee'>
                                    Github
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='proj'>
                        
                        <div className='proj-details right'>
                            <div className='proj-title'>SQUEAL</div>
                            <div className='proj-subtitle'>Restaurant Listing and Review App</div>
                            <div className='line-break right'></div>
                            <div className='proj-title tech-used'>Technologies Used</div>
                            <div className='tech-used'>Python, Flask, SQLAlchemy, PostgreSQL, JavaScript, React Redux, Google Maps API, Docker</div>
                            <div className='proj-desc'>Squeal is a Yelp clone where users are able to review and list their local restaurants. This was a group
                                project done with <a href='https://github.com/amanduhkv'>Amanda Vien</a>, <a href='https://macflyosx.github.io/'>Brandon Tasaki</a>, and <a href='https://www.michaelhjung.com/'>Michael Jung</a>. Our focus was to deliver a sleek and intuitive
                            user experience.
                            </div>
                            <div className='buttons'>

                                <a className='button' href='https://squeal-yelp.herokuapp.com/'>
                                    Live Site
                                </a>
                                <a className='button' href='https://github.com/amanduhkv/Squeal'>
                                    Github
                                </a>
                            </div>
                        </div>

                        <div className='proj-img'>
                            <img alt='squeal prev' src={squeal} />
                        </div>

                    </div>
                    <div className='proj'>
                        <div className='proj-img'>
                            <img alt='heirbnb prev' src={heirbnb} />
                        </div>
                        <div className='proj-details'>
                            <div className='proj-title'>HEIR BNB</div>
                            <div className='proj-subtitle'>Homestay and Vacation Rental Platform</div>
                            <div className='line-break'></div>
                            <div className='proj-title tech-used'>Technologies Used</div>
                            <div className='tech-used'>Express, Sequelize, SQLite3, PostgreSQL, JavaScript, React Redux, NodeJS</div>
                            <div className='proj-desc'>HeirBnB is a homestay and vacation rental platform for the upper echelon! Inspired by AirBnB, and a nod to 
                            Tahani Al-Jamil from "The Good Place". Users can explore, review, book, and list rentals. As my very first full-stack web application, this project occupies a special place in my heart as the
                            first project where I learned how to leverage RESTful APIs, connect backend to frontend, manage Redux state, and everything in between.
                            </div>
                            <div className='buttons'>

                                <a className='button' href='https://heir-bnb-airbnbclone.herokuapp.com/'>
                                    Live Site
                                </a>
                                <a className='button' href='https://github.com/jaeyoungh1/heir-bnb'>
                                    Github
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}