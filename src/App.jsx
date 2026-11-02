 import { useState } from 'react'
 import Nav from './nav'
 import Input from './input'
 function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
            <Nav/>
            <Input/>
           
    </div>
  )
}

export default App
