import "./Button.scss";
import React from 'react'

const Button = ({ 
    text, 
    page,
    classButton, 
    handleClicK 
}) => {

  return (
    <div className="containerButton">
        <button className={classButton} onClick= {handleClicK} page={page}>
          {text}
        </button>
    </div>
  )
}

export default Button
