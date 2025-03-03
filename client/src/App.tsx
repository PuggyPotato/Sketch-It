import { useState } from "react"



function App(){
  const [currentColor,setCurrentColor] = useState("")
  const [activeButton,setActiveButton] = useState(Array(16 * 16).fill(false))

  const toggleColor = (index:number) =>{
      setActiveButton((prev) =>
        prev.map((state,i) => (i===index? !state:state))
      )
  }

  return(
    <>
      <div className="flex justify-center h-screen items-center">
        <h1 className="absolute top-10 text-3xl left-[660px]">Pixel Draw</h1>
        <div className="grid grid-rows absolute top-20 left-140">
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-yellow-300")}>Red</button>
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-green-300")}>Green</button>
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-yellow-300")}>Yellow</button>
        </div>
        <div className="grid grid-cols-16 gap-x-0 w-100 h-30 mb-50 mr-20">
          {Array.from({length:16 * 16}).map((_,i) =>(
            <button key={i} id={`${i}`} className={`border-2 w-6 h-6 mb-0 ${activeButton[i] ? currentColor : ""} `} onClick={() =>toggleColor(i)}></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App