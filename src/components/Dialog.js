import React from 'react'

const Dialog = ({title , children}) => {
  return (
    <div>
       
      <h2>{title}</h2>
      <div>{children}</div>
    
    </div>
  )
}

export default Dialog
