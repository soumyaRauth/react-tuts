import { useState } from "react"


function App() {
const [counter, counterUpdate]=useState(0)

const Add=()=>{
  console.log('first')
  if(counter<20)counterUpdate(counter+1)
}

const Remove=()=>{
  if(counter>0)counterUpdate(counter-1)
}
  return (
    <>
    <h1>React Counter project | SDR</h1>
   {counter}<br/>
   <button onClick={Add}>Add</button>
   <button onClick={Remove}>Remove</button>
    </>
   
  )
}

export default App
