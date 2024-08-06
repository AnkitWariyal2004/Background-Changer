import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]=useState("green");
  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
      <div className='fixed  bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg'>
          <button className='outline-none rounded-xl p-3 bg-red-400 shadow-lg' onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none rounded-xl p-3 bg-green-400 shadow-lg' onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none rounded-xl p-3 bg-purple-400 shadow-lg' onClick={()=>setColor("purple")}>Purple</button>
          <button className='outline-none rounded-xl p-3 bg-blue-400 shadow-lg' onClick={()=>setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
