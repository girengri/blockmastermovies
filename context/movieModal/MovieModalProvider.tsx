import React, { FC, useReducer } from "react";
import { IMovie, OriginalLanguage } from "../../interfaces";
import { MovieModalContext, movieModalReducer } from "./";

export interface MovieModalState {
    movie: IMovie;
}

const MovieModal_INITIAL_STATE: MovieModalState = {
    movie: {
        adult: false,
        backdrop_path: "",
        genre_ids: [],
        id: 0,
        original_language: OriginalLanguage.En,
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
};

interface Props {
    children: React.ReactNode;
}

export const MovieModalProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(
        movieModalReducer,
        MovieModal_INITIAL_STATE
    );

    const addMovieToModal = (movie: IMovie) => {
        return dispatch({
            type: "[MovieModal] - Update Movie Modal",
            payload: movie,
        });
    };

    return (
        <MovieModalContext.Provider
            value={{
                ...state,

                //Methods
                addMovieToModal,
            }}
        >
            {children}
        </MovieModalContext.Provider>
    );
};
