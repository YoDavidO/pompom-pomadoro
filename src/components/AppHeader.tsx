import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

import { ReactComponent as AvatarPlaceholder } from "../assets/svgs/avatarPlaceholder.svg";

import { Button } from "../components";

interface Props {
  onMenuClick: Function;
  open: boolean;
}

export function AppHeader({onMenuClick, open}: Props) {
  return (
    <header className="w-full flex justify-between items-center mb-6">
      <Button className="menu-btn" onClick={() => onMenuClick()}>
        {open ? <XIcon className="w-5 h-5 text-pomWhite" /> : <MenuAlt2Icon className="w-5 h-5 text-pomWhite" />}
      </Button>
      <AvatarPlaceholder />
    </header>
  )
}