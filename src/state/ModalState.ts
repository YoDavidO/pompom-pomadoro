import { atom } from "recoil";

export const ModalState = atom({
  key: 'modalState',
  default: {
    open: false
  }
});