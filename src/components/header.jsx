import React from 'react';
import './Header.css'
import miImagen from '../Img/yo.jpg';

const Header = () => {
    return (
        <header className="container-fluid mb-0 p-0 fixed-top bg-light">
        <div className="header row justify-content-between text-align-center m-0">
            <div className="col-md-6 col-sm-3 d-flex justify-content-center align-items-center">
                <a href="#body" className="d-flex align-items-center m-1">
                    <img src={miImagen} alt="sebastian" className="img-fluid" />
                    <div className='name-content d-flex m-3'>
                        <p className="mb-0">Sebastián Fernández</p>
                        <small><p className="mb-0">software developer</p></small>
                    </div>
                </a>
            </div>
            <div class="col-md-6 col-sm-9 justify-content-center align-items-center d-none d-sm-flex">
                <nav>
                    <a href="#" className="p-3">Home</a>
                    <a href="#proyectos" className="p-3">Proyectos</a>
                    <a href="#about" className="p-3">Sobre mi</a>
                    <a href="#contacto" className="p-3">Contacto</a>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header;