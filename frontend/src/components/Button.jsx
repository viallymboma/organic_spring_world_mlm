import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
      {/* ButtonMainGold, ButtonMainGreen */}
      <button className='ButtonMainGold' style={{ fontSize: props.fontSize }}>
        {props.text}
      </button>
    </div>
  )
}

export default Button


export const AnchorButton = (props) => {
  return (
    <Link 
      // className={ props.aditionalClassName ? `linkBnt ${props.aditionalClassName}` : 'linkBnt'} 
      className='linkBnt'
      style={{ fontSize: props.fontSize }} 
      to={props.theLink}
    >
      {props.btnText}
    </Link>
  )
  // aditionalClassName
}