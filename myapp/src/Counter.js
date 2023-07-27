import React from 'react'

function Counter() {
    const handleAdd=()=>{
        console.log("adding")
    }
    const handleSub=()=>{
        console.log("subtracting")
    }
    return (
    <div>
        <h2>Counter</h2>
        <h3 id="Counter">0</h3>
        <button onClick={handleAdd} style={{margin : 10,fontSize:"20px",backgroundColor: "Blue",color : "white"}}>+</button>
        <button onClick={handleSub} style={{margin : 10,fontSize:"20px",backgroundColor: "Blue",color : "white"}}>-</button>
    </div>
  )
}

export default Counter