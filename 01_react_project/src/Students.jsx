import React from 'react';

const Students = ({ people }) => {
  return (
    <div className="inner_main">
      {people.map((person) => (
        <div className='info_div' key={person.name}>
          <div>
            <img src={person.img} alt={person.name} className="imgs" />
          </div>
          <div>
            <h3>{person.name}</h3>
            <p>{person.work}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Students;