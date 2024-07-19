import React,{useState} from 'react';


function Help() {
  const [isActive, setIsActive] = useState(false);

  let data = [   {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }];

  return (
    <>
      <h1>FAQ</h1>
      {data.map((item, index) => (
        <div className="faq" key={index}>
        <div className="faq_item">
          <div className="faq_title" onClick={() => setIsActive(!isActive)}> 
            <div>{item.title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          <div className="faq_content">
          {isActive && <div className="accordion-content">{item.content}</div>}
          </div>
        </div>
      </div>
      ))}
    </>
  );
}

export default Help;
