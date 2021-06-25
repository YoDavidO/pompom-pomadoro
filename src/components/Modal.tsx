import { useRecoilValue, useSetRecoilState } from "recoil"
import clsx from 'clsx';
import { ModalState } from "../state"

export function Modal() {
  const { open } = useRecoilValue(ModalState);
  const setOpen = useSetRecoilState(ModalState);
  
  return (
    <>
      {open && (
        <div className={clsx("modal fixed z-10 bg-black bg-opacity-75 top-0 left-0 w-full h-full transition-all duration-500 ease-in-out", open ? "opacity-100" : "opacity-0")}>
          <div className="modal-overlay w-full h-full" onClick={() => setOpen({open: false})}></div>
          <div className="modal-content absolute w-full h-full top-28 bg-pomDark rounded-xl">
            This is the modal.
          </div>
        </div>
      )}
    </>
  )
}