import { useState } from "react";
import { CogIcon, PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/solid";

import { TimeType, timeFromSeconds } from "../globals/helpers";
import { useTimer } from "../hooks/useTimer";

import { ReactComponent as PomViewTitle } from "../assets/svgs/pomViewTitle.svg";
import { Button, CircleProgress } from "../components";

export function PomView () {
  const duration = 60;
  const [formattedTime, setFormattedTime] = useState<TimeType>(timeFromSeconds(duration));
  const {isActive, fromZeroTime, stopTimer, toggleTimer} = useTimer(duration, (fromZero:number, toZero:number) => setFormattedTime(timeFromSeconds(toZero)), true); 
  const [currentTimeColor, setCurrentTimeColor] = useState("pomBlueGreen");
  
  const onStopTimer = () => {
    setFormattedTime(timeFromSeconds(duration));
    stopTimer();
  }

  return (
    <div className="pom font-heading w-full h-full">
      <PomViewTitle />
      <div className="timer-header w-full flex justify-between mt-10 mb-12">
        <div className="timer-name font-sans font-normal text-pomWhite">
          Focus Mode!
        </div>
        <div className="timer-edit">
          <CogIcon className="w-5 h-5 text-pomGrayDark" />
        </div>
      </div>
      <div className="timer mb-12 relative">
        <CircleProgress 
          className="mx-auto" 
          color={"pomBlueGreen"} 
          current={fromZeroTime}
          dangerThreshold={50}
          onComplete={() => setCurrentTimeColor("pomBlueGreen")}
          onDanger={() => setCurrentTimeColor("pomRed")}
          onWarning={() => setCurrentTimeColor("pomYellow")}
          size={300} 
          total={duration} 
          toZero={false}
          warningThreshold={30}/>
        <div className={`current-time absolute -mt-7 top-1/2 left-0 w-full text-center font-heading text-6xl text-${currentTimeColor}`}>
          {formattedTime.hrs > 0 && <>{formattedTime.hrs < 10 && "0"}{formattedTime.hrs}:</>}{formattedTime.min < 10 && "0"}{formattedTime.min}:{formattedTime.sec < 10 && "0"}{formattedTime.sec}
        </div>
      </div>
      <div className="timer-footer w-32 mx-auto flex justify-between">
        <div className="timer-stop">
          <Button className="timer-stop" onClick={(evt) => onStopTimer()}>
            <StopIcon className="w-14 h-14 text-pomRed" />
          </Button>
        </div>
        <div className="timer-play-pause" onClick={() => toggleTimer()}>
          {isActive ? <PauseIcon className="w-14 h-14 text-pomYellow" /> : <PlayIcon className="w-14 h-14 text-pomGreen" />}
        </div>
      </div>
    </div>
  ) 
}