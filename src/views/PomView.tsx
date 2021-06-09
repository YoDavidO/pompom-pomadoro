import { useState } from "react";
import { CogIcon, PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/solid";

import { TimeType, timeFromSeconds } from "../globals/helpers";
import { useTimer } from "../hooks/useTimer";

import { ReactComponent as PomViewTitle } from "../assets/svgs/pomViewTitle.svg";
import { CircleProgress } from "../components/CircleProgress";

export function PomView () {
  const duration = 60;
  const [formattedTime, setFormattedTime] = useState<TimeType>(timeFromSeconds(duration));
  const {isActive, fromZeroTime, toggleTimer} = useTimer(duration, (fromZero:number, toZero:number) => setFormattedTime(timeFromSeconds(toZero)), true); 
  
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
      <div className="timer mb-12">
        <CircleProgress 
          className="mx-auto" 
          color={"pomBlueGreen"} 
          current={fromZeroTime}
          dangerThreshold={50}
          size={300} 
          total={duration} 
          warningThreshold={30}/>
        <div className="current-time">
          {formattedTime.hrs < 10 && "0"}{formattedTime.hrs} : {formattedTime.min < 10 && "0"}{formattedTime.min} : {formattedTime.sec < 10 && "0"}{formattedTime.sec}
        </div>
      </div>
      <div className="timer-footer w-32 mx-auto flex justify-between">
        <div className="timer-stop">
          <StopIcon className="w-14 h-14 text-pomRed" />
        </div>
        <div className="timer-play-pause" onClick={() => toggleTimer()}>
          {isActive ? <PauseIcon className="w-14 h-14 text-pomYellow" /> : <PlayIcon className="w-14 h-14 text-pomGreen" />}
        </div>
      </div>
    </div>
  ) 
}