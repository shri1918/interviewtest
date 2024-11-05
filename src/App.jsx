
import { useState } from 'react';
import './App.css';

const row = 20;
const col = 20;
const gridCreate = Array.from({ length: row * col }).fill("#000");

function App() {
  const [change, setChange] = useState(gridCreate);
  const color = '#9a1515';
  const baseColor = "#000";

  const changeColorExpandingSquare = (centerIndex) => {
    let increment = 1;
    const centerRow = Math.floor(centerIndex / col);
    const centerCol = centerIndex % col;

    const interval = setInterval(() => {
      const newGrid = Array.from({ length: row * col }).fill(baseColor);

      for (let r = centerRow - increment; r <= centerRow + increment; r++) {
        for (let c = centerCol - increment; c <= centerCol + increment; c++) {
          if (
            r >= 0 && r < row && c >= 0 && c < col &&
            (r === centerRow - increment || r === centerRow + increment ||
             c === centerCol - increment || c === centerCol + increment)
          ) {
            newGrid[r * col + c] = color;
          }
        }
      }

      setChange(newGrid);
      increment++;

      if (centerRow - increment < 0 && centerRow + increment >= row &&
          centerCol - increment < 0 && centerCol + increment >= col) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <>
      <div>
        <h1>Interview Test</h1>
      </div>
      <div className='grid'>
        {change.map((cellColor, i) => (
          <div
            key={i}
            className='gridI'
            onClick={() => changeColorExpandingSquare(i)}
            style={{ backgroundColor: cellColor }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;