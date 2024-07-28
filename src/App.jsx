import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case 'AC':
        setInput("");
        break;
      case '%':
        try {
          setInput((parseFloat(input) / 100).toString());
        } catch {
          setInput('Error');
        }
        break;
      case '00':
        setInput(input + '00');
        break;
      case '=':
        try {
          setInput(eval(input).toString());
        } catch {
          setInput('Error');
        }
        break;
      case 'DEL':
        //0 for starting index and -1 before the last index, for example 12345 then we will get 1234
        setInput(input.slice(0, -1));
        break;
      default:
         
        setInput(input + value);
        break;
    }
  };

  return (
    <>
      <div className="Calculator">
        <input
          type="text"
          value={input}
          placeholder="0"
          id="inputbox"
          readOnly
        />
        <div>
          <button  style={{ backgroundColor: 'rgb(158, 150, 136)' }} onClick={() => handleButtonClick('AC')}>AC</button>
          <button style={{ backgroundColor: 'rgb(158, 150, 136)' }} onClick={() => handleButtonClick('DEL')}>DEL</button>
          <button style={{ backgroundColor: 'rgb(158, 150, 136)' }} onClick={() => handleButtonClick('%')}>%</button>
          <button style={{ backgroundColor: 'orange' }} onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button style={{ backgroundColor: 'rgb(68, 158, 67)' }} onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button style={{ backgroundColor: 'orange' }} onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button style={{ backgroundColor: 'rgb(68, 158, 67)' }} onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button style={{ backgroundColor: 'orange' }} onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button style={{ backgroundColor: 'rgb(68, 158, 67)' }} onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button style={{ backgroundColor: 'orange' }} onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button style={{ backgroundColor: 'rgb(68, 158, 67)' }} onClick={() => handleButtonClick('00')}>00</button>
          <button style={{ backgroundColor: 'rgb(236, 67, 34)' }} onClick={() => handleButtonClick('0')}>0</button>
          <button style={{ backgroundColor: 'rgb(236, 67, 34)' }} onClick={() => handleButtonClick('.')}>.</button>
          <button style={{ backgroundColor: 'rgb(236, 67, 34)' }} onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
