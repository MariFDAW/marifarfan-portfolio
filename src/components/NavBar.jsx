import React from 'react'
import '../Style/navbar.css'

const NavBar = ({ leng, idioma, setIdioma }) => {
    return (
        <div className='navbar'>
            <ul >
                <li><a href="#sobremi">{leng.navbar.sections[0]}</a></li>
                <li><a href="#experiencia">{leng.navbar.sections[1]}</a></li>
                <li><a href="#proyecto">{leng.navbar.sections[2]}</a></li>
                <li><a href="#educacion">{leng.navbar.sections[3]}</a></li>
                <li><a href="#contacto">{leng.navbar.sections[4]}</a></li>
                <button className="idioma" onClick={() => setIdioma(idioma === "esp" ? "eng" : "esp")}>
                    {idioma === "esp" ? "ENG" : "ESP"}<i class="fa-solid fa-globe"></i>
                </button>
            </ul>
        </div>
    )
}

export default NavBar
