import type { NextPage } from "next";

import { MovieLayout } from "../components/layouts";
import { MovieList } from "../components/movies";
import { MovieModal } from "../components/movies/MovieModal";
import { FullScreenLoading } from "../components/ui/FullScreenLoading";

import { useMovies } from "../hooks";

import styles from "../styles/movieList.module.css";

const HomePage: NextPage = () => {
  const { movies, isLoading } = useMovies(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=es-MX&page=1`
  );

  return (
    <MovieLayout
      title="Block Master"
      pageDescription="Busca las peliculas del momento aquí"
    >
      <h2 className={styles.movieList__title}>Todas las peliculas</h2>

      {isLoading ? <FullScreenLoading /> : <MovieList movies={movies} />}

      <MovieModal />
    </MovieLayout>
  );
};

export default HomePage;
