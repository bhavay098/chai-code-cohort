import { useEffect, useRef, useState } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const elapsedBeforeStartRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = elapsedBeforeStartRef.current + (Date.now() - startTimeRef.current);
        setTime(elapsed);
      }, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    elapsedBeforeStartRef.current = time;
    setIsRunning(false);
  };

  const reset = () => {
    pause();
    setTime(0);
    elapsedBeforeStartRef.current = 0;
    setLaps([]);
  };

  const lap = () => {
    if (!isRunning || time === 0) {
      return;
    }

    setLaps((currentLaps) => [time, ...currentLaps]);
  };

  return {
    time,
    isRunning,
    laps,
    start,
    pause,
    reset,
    lap,
  };
};

export default useStopwatch;
