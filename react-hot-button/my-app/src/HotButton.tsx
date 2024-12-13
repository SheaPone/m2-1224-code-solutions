import { useState } from 'react';
import './HotButton.css';

export function HotButton() {
  const [count, setCount] = useState(0);
  let colorClass: string = 'firstColor';
  if (count <= 3) {
    colorClass = 'firstColor';
  } else if (count <= 6) {
    colorClass = 'secondColor';
  } else if (count <= 9) {
    colorClass = 'thirdColor';
  } else if (count <= 12) {
    colorClass = 'fourthColor';
  } else if (count <= 15) {
    colorClass = 'fifthColor';
  } else {
    colorClass = 'sixthColor';
  }
  return (
    <>
      <button className={colorClass} onClick={() => setCount(count + 1)}>
        Hot Button
      </button>
      <p>{count} Clicks</p>
    </>
  );
}
