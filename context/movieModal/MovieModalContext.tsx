import { createContext } from "react";
import { IMovie } from "../../interfaces";

interface ContextProps {
    movie: IMovie;

    //Methods
    addMovieToModal: (movie: IMovie) => void;
}

export const MovieModalContext = createContext({} as ContextProps);
