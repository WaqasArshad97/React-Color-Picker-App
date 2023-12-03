import { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('olive');
  const [selectedButton, setSelectedButton] = useState(null);
  const btns = ['Red', 'Black', 'Yellow', 'White', 'Orange', 'Green', 'Blue'];
  const btnColors = ['red', 'black', 'yellow', 'white', 'orange', 'green', 'blue'];

  const handleButtonClick = (selectedColor, index) => {
    setBackgroundColor(selectedColor);
    setSelectedButton(index);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="flex gap-5">
        {btns.map((btn, index) => (
          <button
            key={btn}
            style={{
              backgroundColor: btnColors[index],
              padding: '10px',
              cursor: 'pointer',
              border: selectedButton === index ? '2px solid white' : 'none',
              transition: 'background-color 0.3s, border 0.3s',
            }}
            onClick={() => handleButtonClick(btnColors[index], index)}
          >
            {btn}
          </button>
        ))}
        <button
          style={{
            backgroundColor: 'gray',
            padding: '10px',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.3s',
          }}
          onClick={() => {
            setBackgroundColor('olive');
            setSelectedButton(null);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
