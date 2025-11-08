import React from 'react'
import '../Style/experiencia.css'

const Experiencia = ({leng}) => {
    return (
       <>
      {leng.experience.map((exp, index) => (
        <div className='tar-empresa' key={"exp"+index}>
          <div className='lat-izq'>
            <p>{exp.date}</p>
          </div>
          <div className='lat-der'>
            <h1>
              {exp.company} -
              <a href={exp.link}>
                Link <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </h1>
            <p className='cargo'>{exp.role}</p>
            <p className='detalles'>{exp.details}</p>
            <div className="tags">
              {exp.technologies.map((tech, i) => (
                <span key={"tecno"+i}>{tech.toUpperCase()}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}


export default Experiencia
