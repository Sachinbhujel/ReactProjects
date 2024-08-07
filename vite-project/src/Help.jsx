import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [isActive, setIsActive] = useState(-1);

  const data = [
    {
      title: 'Question 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Question 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Question 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
    <div className="faq_item">
      {data.map((item, index) => (
        <div key={index}>
          <div className="faq_title" onClick={() => setIsActive(isActive === index ? -1 : index)}>
            <div>{item.title}</div>
            <div>
              {isActive === index ? (
                <span className="material-symbols-outlined">remove</span>
              ) : (
                <span className="material-symbols-outlined">add</span>
              )}
            </div>
          </div>
          {isActive === index && <div className="faq_content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Help;