import { FC } from "react";
import { useMovies } from "../../hooks";
import { MovieList } from "../movies";
import { FullScreenLoading } from "./";

interface Props {
    pageIndex: number;
}

export const Pagination: FC<Props> = ({ pageIndex }) => {
    const { movies, isLoading } = useMovies(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=es-MX&page=${pageIndex}`
    );

    return (
        <>{isLoading ? <FullScreenLoading /> : <MovieList movies={movies} />}</>
    );
};
