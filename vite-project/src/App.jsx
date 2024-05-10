import React, { useState } from 'react';
import './App.css';
import data from './Data';

function App() {
  let [items, setItems] = useState(data);

  const removeItem = (index) => {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
  };
  
  return (
    <div className="container">
      <div className="main">
        {items.map((item, index) => {
          let borderColor = item.border === 'green' ? 'green' : 'red';

          return (
            <div className="item" key={index} style={{ border: `4px solid ${borderColor}` }}>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
              <h1 className='cross' onClick={() => removeItem(index)}>X</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;