import { useState } from "react";
import type { NextPage } from "next";

import { MovieLayout } from "../../components/layouts";
import { MovieList, MovieModal } from "../../components/movies";
import { FullScreenLoading } from "../../components/ui";
import { useMovies } from "../../hooks";

import styles from "../../styles/movieList.module.css";

const MostPopularPage: NextPage = () => {
    const [pageIndex, setPageIndex] = useState(1);

    const { movies, isLoading } = useMovies(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=es-MX&sort_by=vote_average.desc&page=${pageIndex}`
    );

    return (
        <MovieLayout
            title="Block Master - Valoradas"
            pageDescription="Listado de peliculas mas valoradas"
        >
            <h2 className={styles.movieList__title}>Peliculas más valoradas</h2>

            {isLoading ? <FullScreenLoading /> : <MovieList movies={movies} />}

            <section className={styles.pagination__container}>
                {pageIndex > 1 && (
                    <button
                        className={styles.pagination__buttons}
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        Anterior
                    </button>
                )}

                <button
                    className={styles.pagination__buttons}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Siguiente
                </button>
            </section>

            <MovieModal />
        </MovieLayout>
    );
};

export default MostPopularPage;
