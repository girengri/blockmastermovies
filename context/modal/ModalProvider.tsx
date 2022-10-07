import React, { FC, useReducer } from "react";
import { ModalContext, modalReducer } from "./";

export interface ModalState {
    isModalOpen: boolean;
}

const Modal_INITIAL_STATE: ModalState = {
    isModalOpen: false,
};

interface Props {
    children: React.ReactNode;
}

export const ModalProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, Modal_INITIAL_STATE);

    const toggleSideModal = () => {
        dispatch({ type: "[Modal] - ToggleModal" });
    };

    return (
        <ModalContext.Provider
            value={{
                ...state,

                //Methods
                toggleSideModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
