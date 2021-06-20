import clsx from "clsx";

interface Props {
  className?: string;
}

export function AppNavigation ({className}: Props) {
  return (
    <div className={clsx("app-nav w-14 absolute top-0 bottom-0 bg-pomWhite z-0", !!className && className)}>

    </div>
  )
}