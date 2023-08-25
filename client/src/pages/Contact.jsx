import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {

    const headerStyle =
    {
        color: '#72487c',
        marginBottom: '20px',
    }
    const txtStyle =
    {
        marginBottom: '20px',
        marginLeft: '10px'
    }
  return (
    <div className='content'>
        <div className="txt">
            <h1 style={headerStyle}>Do you want to hire me :) ? </h1>
            <h2 style={{marginBottom: '20px'}}>Contact me here : </h2>
            <p style={txtStyle}>Email: Reidmh110@gmail.com</p>
            <p style={txtStyle}>Linkedin: </p>
            <p style={txtStyle}>Check my github: {<a href="https://github.com/Reid-Harrington" target="_blank" style={{color: 'white'}}>https://github.com/Reid-Harrington</a>}</p>
            
        </div>
        <div className="img">

        </div>

    </div>
  )
}

export default Contact