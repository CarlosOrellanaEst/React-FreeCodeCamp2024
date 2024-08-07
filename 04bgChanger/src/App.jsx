import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive') // only setColor can change color. useState is the default value, ie 'violet'

  function changeColor (color) {
    setColor(color)
  }
  const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple', 'violet'];

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

       {/*  video example  */} 

      {/* <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-500' onClick={() => changeColor('red')}> red </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black bg-blue-500' onClick={() => setColor('blue')}> blue </button>*/}

        {/* Efficient way for various buttons */}
          {colors.map((colorName) => (
            <button className={`outline-none px-4 py-1 rounded-full shadow-lg text-black`} style={{background: colorName}} onClick={() => setColor(colorName)}>
              {colorName}
            </button>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
