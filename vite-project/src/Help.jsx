import React,{useState} from 'react';


function Help() {
  const [isActive, setIsActive] = useState(false);

  let data = [{
    title: 'section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  }, {
    title: 'section 2',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapient'
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