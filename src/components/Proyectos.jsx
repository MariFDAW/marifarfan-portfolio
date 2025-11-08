import React from 'react'
import '../Style/proyecto.css'


const Proyectos = ({ leng, imagenes }) => {
  return (
    <>
      {leng.projects.map((proyecto, index) => (
        <div className='tar-proyecto' key={index}>
          <img src={imagenes[proyecto.name]} alt={proyecto.name} />
          <h1>
            {proyecto.name} -
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              Link <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </h1>
          <p className='cargo'>{proyecto.role}</p>
          <p className='detalles'>{proyecto.details}</p>
          <div className="tags">
            {proyecto.technologies.map((tech, i) => (
              <span key={i}>{tech.toUpperCase()}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Proyectos
