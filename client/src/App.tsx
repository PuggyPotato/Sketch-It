import {useState } from "react"
import PopUp from "./PopUp";



function App(){
  const [currentColor,setCurrentColor] = useState("")
  const [buttonColors,setButtonColors] = useState(Array(64 * 64).fill(""))
  const [mouseDown,setMouseDown] = useState(false);

  const toggleColor = (index:number) =>{
      setButtonColors((prev) =>
        prev.map((color,i) => (i===index? currentColor:color))
      )
  }

  function checkMouseDown(i:any){
    if(mouseDown === true){
      toggleColor(i)
    }
  }

  function makeMouseDown(i:any){
    setMouseDown(true);
    checkMouseDown(i);
    toggleColor(i)
  }


  function makeMouseUp(i:any){
    setMouseDown(false);
    checkMouseDown(i);
  }


  return(
    <>
      <PopUp/>

      <div className="flex justify-center h-screen items-center z-12 font-mono">
        <h1 className="absolute top-3 text-4xl left-[670px]">Pixel Draw</h1>
        <div className="m-10 gap-3 absolute top-3 left-140">
          <button className=" border m-2 bg-red-600 p-4" onClick={() =>setCurrentColor("bg-red-600")}></button>
          <button className=" border m-2 bg-amber-600 p-4" onClick={() =>setCurrentColor("bg-amber-600")}></button>
          <button className=" border m-2 bg-yellow-400 p-4" onClick={() =>setCurrentColor("bg-yellow-400")}></button>
          <button className=" border m-2 bg-green-500 p-4" onClick={() =>setCurrentColor("bg-green-500")}></button>
          <button className=" border m-2 bg-blue-600 p-4" onClick={() =>setCurrentColor("bg-blue-600")}></button>
          <button className=" border m-2 bg-purple-400 p-4" onClick={() =>setCurrentColor("bg-purple-400")}></button>
          <button className=" border m-2 bg-purple-600 p-4 " onClick={() =>setCurrentColor("bg-purple-600")}></button>
          
        </div>
        <div className="grid grid-cols-64 gap-x-2 gap-0 w-100 h-30 mb-90 mr-30">
          {Array.from({length:64 * 64}).map((_,i) =>(
            <button key={i} id={`${i}`} className={`border-1 w-2 h-2 mb-0 ${buttonColors[i]} `} 
                                        onMouseDown={() =>makeMouseDown(i)}
                                        onMouseOver={mouseDown ? () =>toggleColor(i) : undefined}
                                        onMouseUp={makeMouseUp}></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App