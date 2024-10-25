import React from 'react';
 const ProyectCard = ({title, description, link, imageSrc, tech}) => {
    return (
        <div className='row'>
            <div className='col-6 mt-4'>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div>
                    <a className='span' href={link}>Frontend</a>
                    <p className='stackProyects'>{tech}</p>
                    </div>
                </div>
            </div>
            <div className='container-img col-6 d-flex justify-content-center align-items-center'>
                <a targer='_blank' href={link}>
                    <img className='img' src={imageSrc} alt={title} />
                </a>
            </div>
        </div>
    )
 }

 export default ProyectCard;