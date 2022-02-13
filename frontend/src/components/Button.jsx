import React from 'react'

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