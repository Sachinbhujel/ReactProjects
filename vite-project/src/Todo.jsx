import React, { useState } from 'react'

function Todo() {
  let [value, setValue] = useState("");
  let [data, setData] = useState([]);

  function addValue(){
    if (value.trim() === '') {
      alert("Please enter a valid value.");
      return; // exit the function if input value is empty
    }
    
    setData((data) => {
      const updateData = [...data, value]
      setValue('')
      return updateData
    })
  }
  return (
    <>
      <input type='text' value={value} placeholder="Enter your list..." onChange={(e)=> setValue(e.target.value)}></input>
      <div>Todo</div>
      <button onClick={addValue}>Add</button>
      <p>Here is your list :{")"}</p>

      {data.length > 0 && data.map((data, index) =>{
        return (
            <div key={index} className="lists_div">
              <div>{data}</div>
              <div className='buttons_div'>
                <button>Edit</button>
                <button>Remove</button>
              </div>
            </div>
        )
      })}
    </>
  )
}

export default Todo