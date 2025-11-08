import React from 'react'
import '../Style/header.css'

const Header = (props) => {
  return (
    <div className='header' id={props.id}>
      <h1>{props.titulo}</h1>
    </div>
  )
}

export default Header
