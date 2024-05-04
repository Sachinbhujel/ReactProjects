import './App.css'
import Color_generator from './RandomColor'


function GenerateColor() {
  <Color_generator/>
  const copyColor = () => {
    const colorName = document.getElementById('show_name').innerText;
    navigator.clipboard.writeText(colorName);
    alert(`Copied!`);
  };

  return (
    <>
      <div className='generate_div'>
        <h1>Color Generator</h1>
        <div className="color_div" id='show_color'></div>
        <div className='color_name' id="show_name">
            <span>#E63946</span>
        </div>
        <div className="buttons">
            <button onClick={Color_generator}>Generate</button>
            <button id='copy' onClick={copyColor}>Copy</button>
        </div>
      </div>
    </>
  )
}

export default GenerateColor;
