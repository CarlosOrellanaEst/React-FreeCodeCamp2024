import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../02counter/src/components/Card'

function App() {
  const [count, setCount] = useState(0)

  let dataSecondCard = {
    username: 'Daniel', 
    position: 'Intern', 
    image: 'https://images.pexels.com/photos/24247189/pexels-photo-24247189/free-photo-of-mar-puesta-de-sol-relajacion-nina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  }

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Carlos"/>
      <Card {...dataSecondCard} /> {/*  spread operator: to pass the parameters as individuals */}
    </>
  )
}

export default App
