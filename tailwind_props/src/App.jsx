import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myob = {
    lastname: "pathak",
    age: 21
  }

  let arr=[1,2,3,4]

  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card username="ashish" text="click me"/>
      <Card username="pathak" text="visit me"/>
    </>
  )
}

export default App
