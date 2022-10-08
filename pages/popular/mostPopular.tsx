import type { NextPage } from "next";

import { MovieLayout } from "../../components/layouts";

import { MovieList, MovieModal } from "../../components/movies";
import { FullScreenLoading } from "../../components/ui/FullScreenLoading";
import { useMovies } from "../../hooks";

import styles from "../../styles/movieList.module.css";

const MostPopularPage: NextPage = () => {
    const { movies, isLoading } = useMovies(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=es-MX&sort_by=vote_average.desc&page=1`
    );

    return (
        <MovieLayout
            title="Block Master - Valoradas"
            pageDescription="Listado de peliculas mas valoradas"
        >
            <h2 className={styles.movieList__title}>Peliculas más valoradas</h2>

            {isLoading ? <FullScreenLoading /> : <MovieList movies={movies} />}

            <MovieModal />
        </MovieLayout>
    );
};

export default MostPopularPage;
