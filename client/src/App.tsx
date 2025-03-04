import { useState } from "react"



function App(){
  const [currentColor,setCurrentColor] = useState("")
  const [buttonColors,setButtonColors] = useState(Array(16 * 16).fill(false))
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
      <div className="flex justify-center h-screen items-center">
        <h1 className="absolute top-10 text-3xl left-[660px]">Pixel Draw</h1>
        <div className="grid grid-rows absolute top-20 left-140">
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-yellow-300")}>Red</button>
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-green-300")}>Green</button>
          <button className="size-4 border m-2" onClick={() =>setCurrentColor("bg-yellow-300")}>Yellow</button>
        </div>
        <div className="grid grid-cols-16 gap-x-0 w-100 h-30 mb-50 mr-20">
          {Array.from({length:16 * 16}).map((_,i) =>(
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