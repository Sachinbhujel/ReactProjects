import ShowTodo from "./ShowTodo";

function TodoDiv() {


  function SubmitBtn(){
  var input = document.getElementById("input");
  
  if(input.value == ""){
    alert("Type something..")
  } else{
    document.getElementById("allDiv").innerHTML += `<div className="showDiv">
    <p>${input.value}</p>
    <div className='buttons'>
      <button className='edit'>Edit</button>
      <button className='delete'>Delete</button>
    </div>
</div>`;
    }
  }

    return (
      <div className="todoDiv">
        <h2>Todo List</h2>
        <div className="inputDiv">
          <input type="text" id="input" placeholder="Add a todo..."></input>
          <button onClick={SubmitBtn}>Submit</button>
        </div>
        <ShowTodo/>
      </div>
    );
  }
  
  export default TodoDiv;  