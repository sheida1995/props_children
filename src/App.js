import React from 'react'
import Button from './components/Button'
import Dialog from './components/Dialog'

const App = () => {
  return (
    <div>
      <Dialog title={'welcome'}>
        <Button color='red' onClick={()=> alert("welcome baby")}>
clickkkkk
        </Button>
      </Dialog>
      
    </div>
  )
}

export default App

