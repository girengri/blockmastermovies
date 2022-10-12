import { useState } from "react";

import type { GetServerSideProps, NextPage } from "next";

import { MovieLayout } from "../../components/layouts";

import { MovieList, MovieModal } from "../../components/movies";
import { FullScreenLoading } from "../../components/ui";

import { useMovies } from "../../hooks";

import styles from "../../styles/movieList.module.css";

interface Props {
    query: string;
}

const SearchPage: NextPage<Props> = ({ query }) => {
    const [pageIndex, setPageIndex] = useState(1);

    const { movies, isLoading } = useMovies(
        ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=es-MX&query=${query}&page=${pageIndex}`
    );

    const foundMovies = movies.length > 0;

    return (
        <MovieLayout
            title="Block Master - Resultados"
            pageDescription={`Resultados de busqueda de la pelicula ${query}`}
        >
            <h2 className={styles.movieList__title}>Resultados de busqueda</h2>

            {!foundMovies && (
                <div className={styles.movieList__search}>
                    <picture>
                        <img src="/search.svg" alt="no se encontraron" />
                    </picture>

                    <h2 className={styles.movieList__title}>
                        No se encontraron resultados para {`"${query}"`}
                    </h2>
                </div>
            )}

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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = "" } = params as { query: string };

    if (query.length === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    }

    return {
        props: {
            query,
        },
    };
};

export default SearchPage;
