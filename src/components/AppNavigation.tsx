import { ClipboardListIcon, ClockIcon, CollectionIcon, PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export enum Locations {
  HOME = "/",
  MY_POMS = "/poms",
  TASKS = "/tasks",
  NEW_POM = "/new"
}

interface Props {
  className?: string;
  onNavClick: Function;
}

export function AppNavigation ({className, onNavClick}: Props) {
  const location = useLocation();

  return (
    <div className={clsx("app-nav w-14 absolute top-0 bottom-0 bg-pomWhite z-0", !!className && className)}>
      <div className="app-nav-inner w-full h-full pt-36 pb-12 flex flex-col text-pomGray">
        <Link to={Locations.HOME} onClick={() => onNavClick(false)}>
          <ClockIcon className={clsx("w-7 h-7 mx-auto mb-5", location.pathname === Locations.HOME && "text-pomBlueGreen")} />
        </Link>
        <Link to={Locations.MY_POMS} onClick={() => onNavClick(false)}>      
          <CollectionIcon className={clsx("w-7 h-7 mx-auto mb-5", location.pathname === Locations.MY_POMS && "text-pomBlueGreen")} />
        </Link>
        <Link to={Locations.TASKS} onClick={() => onNavClick(false)}>
          <ClipboardListIcon className={clsx("w-7 h-7 mx-auto", location.pathname === Locations.TASKS && "text-pomBlueGreen")} />
        </Link>
        <Link to={Locations.NEW_POM} className={"mt-auto"} onClick={() => onNavClick(false)}>
          <PlusCircleIcon className={"w-7 h-7 text-pomBlueGreen mx-auto"}/>
        </Link>
      </div>
    </div>
  )
}