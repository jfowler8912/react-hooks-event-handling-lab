// Code Keypad Component Here
import React from "react"

function Keypad (){
    console.log("Hi I'm here.")
    return (
        
            <input type='password' onChange={(event)=> console.log('Entering password...')}></input>
        
    )
}

export default Keypad;