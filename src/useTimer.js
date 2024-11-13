import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [split, setSplit] = useState([])

  const isStart = useRef(false);
  const active = useRef(null);
  const refInterval = useRef(null);

  const startTimer = () => {
    if(!isStart.current){
      isStart.current=true;
      refInterval.current= setInterval(() => {
        setTime((prevTime) => prevTime +1); //increment time every second
      }, 1000);
      active.current.disabled = true;//disable the start button
    };
  };
  const stopTimer = () => {
    clearInterval(refInterval.current); //stop the interval
    isStart.current=false; //mark as stop
    active.current.disabled=false; //enable start button
  };
  const resetTimer = () => {
    clearInterval(refInterval.current); //stop te interval stop running
    setTime(0);
    isStart.current = false;
    active.current.disabled=false;
    setSplit([]);
  };

  const splitTimer = () => {
    setSplit((prevSplit) => [...prevSplit,time]);
  }

  return { time, startTimer, stopTimer, resetTimer, active, split, splitTimer };
};
export default useTimer;
