import React from 'react'
import '../Style/educacion.css'

const Educacion = ({ leng }) => {
  return (
    <>
      {leng.education.map((edu, index) => (
        <div className='tar-educacion' key={index}>
          <div className='lat-izq'>
            <p>{edu.date}</p>
          </div>
          <div className='lat-der'>
            <h1>{edu.degree}</h1>
            <p className='centro'>
              {edu.institution} -
              <a href={edu.link} target="_blank" rel="noopener noreferrer">
                Link <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </p>
            <p className='detalles'>{edu.details}</p>
            <div className="tags">
              {edu.technologies.map((tech, i) => (
                <span key={i}>{tech.toUpperCase()}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Educacion
