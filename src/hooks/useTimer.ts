import { useEffect, useState } from "react";

export function useTimer(duration: number, onTick?: Function, fromZero: boolean = false) {
  const [toZeroTime, setToZeroTime] = useState(duration);
  const [fromZeroTime, setFromZeroTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggleTimer() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval:NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (toZeroTime > 0) setToZeroTime(time => time - 1);
        if (fromZeroTime < duration) setFromZeroTime(time => time + 1);
        if (toZeroTime === 0 || fromZeroTime === duration) setIsActive(false);

        if (!!onTick) onTick(fromZeroTime, toZeroTime);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [duration, fromZero, fromZeroTime, isActive, onTick, setIsActive, setFromZeroTime, setToZeroTime, toZeroTime]);

  return {
    isActive,
    fromZeroTime,
    toZeroTime,
    toggleTimer
  };
}