import React from 'react'
import '../Style/contacto.css'

const Contacto = ({leng}) => {
  return (
    <div className='contacto'>
      <h1>Email</h1>
      <p>correo@email.com</p>
      <h1>Linkedin</h1>
      <p><a href='https://www.linkedin.com/in/mari-carmen-farfan'><i className='fa-brands fa-square-linkedin'></i>Mari Carmen Farfán</a></p>
      <h1>{leng.contact.phoneNumber}</h1>
      <p>+34 555 555 555</p>
    </div>
  )
}

export default Contacto
