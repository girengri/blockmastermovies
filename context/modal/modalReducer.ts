import { ModalState } from "./";

type ModalActionType = { type: "[Modal] - ToggleModal" };

export const modalReducer = (
    state: ModalState,
    action: ModalActionType
): ModalState => {
    switch (action.type) {
        case "[Modal] - ToggleModal":
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };

        default:
            return state;
    }
};
