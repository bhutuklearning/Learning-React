import { useState } from 'react'


function App() {
  
  const [color, setColor] = useState("#f9f7f9");

  return (
   <div className="w-full h-screen" style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>

        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}
          onClick={()=>{setColor("red")}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}
          onClick={()=>{setColor("green")}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}
          onClick={()=>{setColor("blue")}}>Blue</button>
         <button className='outline-none px-4 py-1 rounded-full text-black shadow-xl' style={{backgroundColor: "#f9f9f9"}}
          onClick={()=>{setColor("white")}}>White</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}
          onClick={()=>{setColor("black")}}>Black</button>
         <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor: "yellow"}}
          onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "lavender"}}
          onClick={()=>{setColor("lavender")}}>Lavender</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "indigo"}}
          onClick={()=>{setColor("indigo")}}>Indigo</button>

      </div>
    </div>
   </div>
  )
}

export default App
