import React from 'react';
import ig from '../assets/ig.png';
import linkedin from '../assets/linkedin.png';
import git from '../assets/git.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='contacto' className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>¡Let's get in touch!</h3>
                        <p className='pt-4'><strong>Email:</strong> fernandezsolarisebastian@gmail.com</p>
                    </div>
                    <div className='col-6 redes'>
                        <h4 className='text-center'>Redes Sociales</h4>
                        <div className='d-flex justify-content-center pt-3'>
                            <a target='_blank' href="https://www.linkedin.com/in/sebastianfernandezti/">
                                <img src={linkedin} alt="" />
                            </a>
                            <a target='_blank' href="https://github.com/Seba113/">
                                <img src={git} alt="" />
                            </a>
                            <a target='_blank' href="https://www.instagram.com/sebafs98/">
                                <img src={ig} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;