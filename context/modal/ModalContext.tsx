import { createContext } from "react";

interface ContextProps {
    isModalOpen: boolean;

    // Methods
    toggleSideModal: () => void;
}

export const ModalContext = createContext({} as ContextProps);
