import clsx from "clsx";
import { MouseEvent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  label?: string;
  onClick: (event:MouseEvent) => void;
}

export function Button({
  children,
  className,
  label,
  onClick
}: Props) {
  return (
    <button className={clsx(`btn focus:outline-none`, !!className && className)} onClick={onClick}>
      {children || label}
    </button>
  )
}