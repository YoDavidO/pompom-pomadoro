import { ReactComponent as AvatarPlaceholder } from "../assets/svgs/avatarPlaceholder.svg";
import { MenuAlt2Icon } from "@heroicons/react/solid";

export function AppHeader() {
  return (
    <header className="w-full flex justify-between items-center mb-6">
      <div className="menu-btn">
        <MenuAlt2Icon className="w-5 h-5 text-pomWhite" />
      </div>
      <AvatarPlaceholder />
    </header>
  )
}