import { FC } from "react";

import { IMovie } from "../../interfaces";
import { MovieCard } from "./MovieCard";

import styles from "../../styles/movieList.module.css";

interface Props {
  movies: IMovie[];
}

export const MovieList: FC<Props> = ({ movies }) => {
  return (
    <section className={ styles.movieList__container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
