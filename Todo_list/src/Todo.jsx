import React, { useState, useRef } from 'react';

function Todo() {
  let [value, setValue] = useState("");
  let [data, setData] = useState([]);
  const inputRef = useRef(null);

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

  function removeAll(){
    setData([])
    const allRemoveAlertElement = document.getElementById("allRemoveAlert");
    allRemoveAlertElement.innerHTML = "All List Removed";
    allRemoveAlertElement.style.display = "block";
    setTimeout(() => {
      allRemoveAlertElement.style.display = "none";
    }, 1500);
  }

  function editBtn(index){
    const newList = data.filter((elem, id) => index !== id);
    setData(newList);
    const newValue = data[index];
    setValue(newValue);
    setTimeout(() => inputRef.current.focus(), 0);
  }

  return (
    <div className='main'>
      <p id='removeAlert'></p>
      <p id='allRemoveAlert'></p>
      <h2>Todo List</h2>
      <div className='input_div'>
        <input type='text' value={value} placeholder="Enter your list..." onChange={(e)=> setValue(e.target.value)}></input>
        <button onClick={addValue} id="addBtn">Add</button>
      </div>
      {data.length > 0 && <p>Here is your list :{")"}</p>}

      {data.length > 0 && data.map((data, index) =>{
        return (
          <>
            <div key={index} className="lists_div">
              <div className='data'>{data}</div>
              <div className='buttons_div'>
                <button id="edit" onClick={() => editBtn(index)}>Edit</button>
                <button id="remove" onClick={() => removeList(index)}>Remove</button>
              </div>
            </div>
          </>  
        )
      })}
      {data.length > 0  && <button onClick={removeAll} id="removeAll">Remove All</button>}
    </div>
  )
}

export default Todo