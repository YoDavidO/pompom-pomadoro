import { CogIcon, PlayIcon } from "@heroicons/react/solid";

import { Button } from "../components";

interface Props {
  id: string;
  name: string;
  onSettingsClick: (id: string) => void;
  onStartClick: (id: string) => void;
}

export function PomCard({id, name, onSettingsClick, onStartClick}: Props) {
  return (
    <div className="pom-card w-full p-4 flex bg-pomDarkBg rounded-xl font-sans text-pomWhite text-lg">
      <div className="flex-grow">{name}</div>
      <div className="flex items-end">
        <Button onClick={() => onStartClick(id)}>
          <PlayIcon className="w-6 h-6 text-pomBlueGreen self-center mr-2" />
        </Button>
        <Button onClick={() => onSettingsClick(id)}>
          <CogIcon className="w-6 h-6 text-pomGrayDark self-center" />
        </Button>
      </div>
    </div>
  )
}