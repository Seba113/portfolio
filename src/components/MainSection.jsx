import React from 'react';
import html from '../Img/html.png'
import css from '../Img/css.png'
import bootrstrap from '../Img/bootrstrap.png'
import react from '../Img/react.png'
import js from '../Img/js.png'
import nodejs from '../Img/nodejs.png'
import sql from '../Img/sql.png'
import c from '../Img/c.png'
import git from '../Img/git.png'
import github from '../Img/github.png'
import './MainSection.css';

const MainSection = () => {
    return (
        <section className='mainSection'>
            <div className='container d-flex justify-content-center'>
                <div className='text-center'>
                    <h1>Software Developer</h1>
                    <h2>Sebastián Fernández</h2>
                    <p className='mt-4'>Full Stack Student</p>
                    <p>ORT University → Montevideo, Uy </p>
                </div>
                <div className='redes mt-3'>
                    <nav className='mt-4'>
                        <a href="https://www.linkedin.com/in/sebastianfernandezti/" className='p-3' target='_blank'>LinkedIn →</a>
                        <a href="" className='p-3'>CV ↓</a>
                        <a href="https://github.com/Seba113" className='p-3'target='_blank'>GitHub →</a>
                    </nav>
                </div>
                <div className='stack'>
                    <div>
                        <img src={html} alt="html" />
                    </div>
                    <div>
                        <img src={css} alt="html" />
                    </div>
                    <div>
                        <img src={bootrstrap} alt="html" />
                    </div>
                    <div>
                        <img src={js} alt="html" />
                    </div>
                    <div>
                        <img src={react} alt="html" />
                    </div>
                    <div>
                        <img src={nodejs} alt="html" />
                    </div>
                    <div>
                        <img src={c} alt="html" />
                    </div>
                    <div>
                        <img src={git} alt="html" />
                    </div>
                    <div>
                        <img src={github} alt="html" />
                    </div>
                    <div>
                        <img src={sql} alt="html" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection