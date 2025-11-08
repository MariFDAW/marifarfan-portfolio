import React from 'react'
import ImagenCv from '../assets/images.png'
import '../Style/SobreMi.css'
import fotoCV from '../assets/fotoCv.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const SobreMi = ({leng}) => {
    return (
        <div>
            <div className='sobre-mi' id='sobremi'>
                <img src={fotoCV} />
                <div className='tarjeta'>
                    <h1>{leng.aboutMe.name}</h1>
                    <p>{leng.aboutMe.description}</p>
                    <a href='https://www.linkedin.com/in/mari-carmen-farfan'><i className='fa-brands fa-square-linkedin'></i>{leng.aboutMe.name}</a>
                    <span><i className='fa-solid fa-envelope'></i>{leng.aboutMe.email}</span>
                </div>
            </div>
            <h1 className='titulacion'>{leng.aboutMe.title}</h1>
        </div>
    )
}

export default SobreMi
