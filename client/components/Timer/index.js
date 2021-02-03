import React, {useEffect, useState} from 'react';

function Timer() {
  const initSeconds = 1500; //25 minutes worth of seconds
  const [seconds, setSeconds] = useState(initSeconds);
  const [isActive, setIsActive] = useState(false);
  let timeout;

  useEffect(() => {
    if (isActive && seconds) {
      timeout = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } 

    if (seconds === 0) {
      clearTimeout(timeout);
      setIsActive(false);
    }

  }, [isActive, seconds]);

  const toggle = function() {
    if (isActive) clearTimeout(timeout);
    setIsActive(!isActive);
  };

  const reset = function() {
    clearTimeout(timeout);
    setSeconds(initSeconds);
  };

  return (
    <React.Fragment>
      <div className="time-left">
        <span className="minutes">
          {Math.floor(seconds / 60)}
        </span>:
        <span className="seconds">
          {Math.floor(seconds % 60).toString().padStart(2, '0')}
        </span>
      </div>
      <button 
        className="timer start"
        onClick={toggle}
      >
        {isActive? 'Pause' : 'Start'} Timer
      </button>
      <button
        className="timer reset"
        onClick={reset}
      >
        Reset Timer
      </button>
    </React.Fragment>
  )
};

export default Timer;
