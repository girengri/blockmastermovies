import { IMovie } from "../../interfaces";
import { MovieModalState } from "./";

type MovieModalActionType = {
    type: "[MovieModal] - Update Movie Modal";
    payload: IMovie;
};

export const movieModalReducer = (
    state: MovieModalState,
    action: MovieModalActionType
): MovieModalState => {
    switch (action.type) {
        case "[MovieModal] - Update Movie Modal":
            return {
                movie: action.payload,
            };

        default:
            return state;
    }
};
