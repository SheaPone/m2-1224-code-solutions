import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './StopWatch.css';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [myInterval, setMyInterval] = useState<NodeJS.Timeout>();
  const isRunning = myInterval;
  function switchIcons() {
    if (isRunning) return <FaPause />;
    return <FaPlay />;
  }

  function handleRunning() {
    if (!isRunning) {
      const intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setMyInterval(intervalId);
    } else {
      clearInterval(isRunning);
      setMyInterval(undefined);
    }
  }

  function handleReset() {
    if (isRunning) {
      return;
    }
    setCount(0);
  }

  return (
    <>
      <div className="stopwatch">
        <div className="watch-face" onClick={handleReset}>
          <span>{count}</span>
        </div>
        <div className="start-stop" onClick={handleRunning}>
          {switchIcons()}
        </div>
      </div>
    </>
  );
}
