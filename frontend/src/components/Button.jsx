import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
      {/* ButtonMainGold, ButtonMainGreen */}
      <button className='ButtonMainGold' style={{ fontSize: props.fontSize }} onClick={props.onACLick}>
        {props.text}
      </button>
    </div>
  )
}

export default Button


export const ALinkCustomized = (props) => {
  return(
    <div>
      <a href={props.sendLink} style={{ fontSize: props.fontSize }} className='linkBnt'>
        {props.btnText}
      </a>
    </div>
  )
}


export const AnchorButton = (props) => {
  return (
    <button 
      // className={ props.aditionalClassName ? `linkBnt ${props.aditionalClassName}` : 'linkBnt'} 
      className='linkBnt'
      style={{ fontSize: props.fontSize }} 
      // to={props.theLink}
      onClick={props.onACLick}
    >
      {props.btnText}
    </button>
  )
}


export const AnchorButtonSharp = (props) => {
  return (
    <button 
      // className={ props.aditionalClassName ? `linkBnt ${props.aditionalClassName}` : 'linkBnt'} 
      className='linkBntSharp'
      style={{ fontSize: props.fontSize }}
      onClick={props.onACLick}
      // to={props.theLink}
    >
      {props.btnText}
    </button>
  )
}

export const ButtonSharp = (props) => {
  return (
    <button 
      // className={ props.aditionalClassName ? `linkBnt ${props.aditionalClassName}` : 'linkBnt'} 
      className='linkBntSharp'
      style={{ fontSize: props.fontSize }}
      // onClick={props.onACLick}
      to={props.theLink}
    >
      {props.btnText}
    </button>
  )
}