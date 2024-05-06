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

  function removeList(index) {
    const newList = data.filter((elem, id) => index !== id);
    setData(newList);
    const removeAlertElement = document.getElementById("removeAlert");
    removeAlertElement.innerHTML = "List Removed";
    removeAlertElement.style.display = "block";
    setTimeout(() => {
      removeAlertElement.style.display = "none";
    }, 1500);
  }  

  return (
    <div className='main'>
      <p id='removeAlert'></p>
      <h2>Todo List</h2>
      <div className='input_div'>
        <input type='text' value={value} placeholder="Enter your list..." onChange={(e)=> setValue(e.target.value)}></input>
        <button onClick={addValue} id="addBtn">Add</button>
      </div>
      <p>Here is your list :{")"}</p>

      {data.length > 0 && data.map((data, index) =>{
        return (
            <div key={index} className="lists_div">
              <div className='data'>{data}</div>
              <div className='buttons_div'>
                <button id="edit">Edit</button>
                <button id="remove" onClick={() => removeList(index)}>Remove</button>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default Todo