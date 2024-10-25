import React from 'react';
import ProyectCard from './ProyectCard';
import rick from '../Img/rick.png'
import './ProyectSection.css';

const ProyectSection = () => {

    const projects = [
        {
            title: 'Consumiendo Api con React',
            description: 'Este fue mi primer proyecto con React consumiendo la API de Rick y Morty para crear una wiki de personajes y mostrar su información.',
            link: 'https://seba113.github.io/1er-proyecto-api-con-React/',
            imageSrc: rick,
            tech: 'REACT, JavaScript, CSS, Bootstrap'
        },
    ]

    return (
        <section id='proyectos' className='proyectSection'>
            <div className='container mt-1'>
                <div className='col-6'>
                    <small><p className='span mb-1'>Proyectos</p></small>
                    <h3 className='mb-4'>Mis proyectos destacados</h3>
                </div>
                {projects.map((project, index) => (
                    <ProyectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        imageSrc={project.imageSrc}
                        tech={project.tech}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProyectSection;