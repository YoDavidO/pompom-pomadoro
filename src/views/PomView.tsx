import { CogIcon, PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/solid";
import { useState } from "react";

import { ReactComponent as PomViewTitle } from "../assets/svgs/pomViewTitle.svg";

import { CircleProgress } from "../components/CircleProgress";

export function PomView () {
  const [playing, setPlaying] = useState(true);

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
        <CircleProgress className="mx-auto" color={"pomBlueGreen"} current={70} size={300} total={100} />
      </div>
      <div className="timer-footer w-32 mx-auto flex justify-between">
        <div className="timer-stop">
          <StopIcon className="w-14 h-14 text-pomRed" />
        </div>
        <div className="timer-play-pause" onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon className="w-14 h-14 text-pomYellow" /> : <PlayIcon className="w-14 h-14 text-pomGreen" />}
        </div>
      </div>
    </div>
  ) 
}