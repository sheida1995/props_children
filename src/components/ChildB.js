import React from 'react'

const ChildB = ({number , text}) => {
    
  return (
    <div>
      <h3>ChildB</h3>
      <p>{number}</p>
      {text}
    </div>
  )
}

export default ChildB
