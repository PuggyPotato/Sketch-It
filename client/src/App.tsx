


function App(){

 


  return(
    <>
      <div className="flex justify-center h-screen items-center">
        <h1 className="absolute top-20 text-3xl left-[660px]">Pixel Draw</h1>
        <div className="grid grid-cols-32 gap-x-0 w-100 h-30 mb-50 mr-20">
          {Array.from({length:32 * 32}).map((_,i) =>(
            <button key={i} id={`${i}`} className="border-2 w-3 h-3 mb-0"></button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App