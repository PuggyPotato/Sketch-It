import { useState } from "react"





function PopUp(){
    const [showPopUp,setShowPopUp] = useState(true);


    return(
        <>
            
            <div className={`${showPopUp?"absolute flex justify-center ml-64 items-center opacity-100 h-screen z-11":" h-0 w-0 opacity-0 z-1 hidden"}`}> 
                <div className="border-2 w-256 h-128  bg-blue-400 z-2 font-mono h-auto animate-pulse  z-1">
                    <h1 className="text-8xl text-center pb-30 pt-2">How To Draw?</h1>
                    <p className="text-5xl text-center">Just Click On The Color, And Click On The Grid To Color!</p>
                    <button className="border-4 mt-28 ml-92 text-5xl font-mono bg-purple-600 hover:cursor-pointer animate-none" onClick={() => setShowPopUp(false)}>Understood!</button>
                </div>
            </div>
            
        </>
    )
} 

export default PopUp