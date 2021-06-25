import { PlusCircleIcon } from "@heroicons/react/solid";
import { useSetRecoilState } from "recoil";

import { ReactComponent as PomsViewTitle } from "../assets/svgs/myPomsViewTitle.svg";
import { Button, PomCard } from "../components";

import { ModalState } from "../state";

export function PomsView() {
  const setModalState = useSetRecoilState(ModalState);

  return (
    <div className="poms-view w-full">
      <PomsViewTitle />

      <div className="pom-cards mt-10">
        <PomCard id="test" name="Focus Mode!" onSettingsClick={(id) => console.log(id)} onStartClick={(id) => console.log(id)} />
        <Button className="w-full border border-pomBlueGreen border-dashed p-4 rounded-xl mt-4" onClick={() => setModalState({
          open: true
        })}>
          <PlusCircleIcon className="w-6 h-6 text-pomBlueGreen mx-auto" />
        </Button>
      </div>
    </div>
  )
}