import React, {useState} from 'react'

function Condition() {

   const[gender, setgender] =  useState(false)

    return (
            gender ? <h1> Female </h1> : <h1>Male</h1> 
    )
}

export default Condition
