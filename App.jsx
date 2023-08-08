import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
      <Header></Header>
      <Body></Body>
   </div>
  )
}

export default App
