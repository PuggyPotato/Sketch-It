import { useEffect, useState } from "react"
import Popup from "reactjs-popup";
import PopUp from "./PopUp";



function App(){
  const [currentColor,setCurrentColor] = useState("")
  const [buttonColors,setButtonColors] = useState(Array(25 * 25).fill(""))
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

      <div className="flex justify-center h-screen items-center z-12">
        <h1 className="absolute top-5 text-3xl left-[660px]">Pixel Draw</h1>
        <div className="m-10 gap-3 absolute top-3 left-140">
          <button className=" border m-2 bg-red-600 p-4" onClick={() =>setCurrentColor("bg-red-600")}></button>
          <button className=" border m-2 bg-amber-600 p-4" onClick={() =>setCurrentColor("bg-amber-600")}></button>
          <button className=" border m-2 bg-yellow-400 p-4" onClick={() =>setCurrentColor("bg-yellow-400")}></button>
          <button className=" border m-2 bg-green-500 p-4" onClick={() =>setCurrentColor("bg-green-500")}></button>
          <button className=" border m-2 bg-blue-600 p-4" onClick={() =>setCurrentColor("bg-blue-600")}></button>
          <button className=" border m-2 bg-purple-400 p-4" onClick={() =>setCurrentColor("bg-purple-400")}></button>
          <button className=" border m-2 bg-purple-600 p-4 " onClick={() =>setCurrentColor("bg-purple-600")}></button>
          
        </div>
        <div className="grid grid-cols-23 gap-x-6 w-100 h-30 mb-90 mr-40">
          {Array.from({length:23 * 23}).map((_,i) =>(
            <button key={i} id={`${i}`} className={`border-2 w-6 h-6 mb-0 ${buttonColors[i]} `} 
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