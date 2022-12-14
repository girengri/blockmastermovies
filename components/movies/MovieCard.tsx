import { FC, useContext } from "react";
import { ModalContext, MovieModalContext } from "../../context";

import { IMovie } from "../../interfaces";

import styles from "../../styles/movieCard.module.css";

interface Props {
    movie: IMovie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
    const { toggleSideModal } = useContext(ModalContext);
    const { addMovieToModal } = useContext(MovieModalContext);

    const viewDetails = (movie: IMovie) => {
        toggleSideModal();
        addMovieToModal(movie);
    };

    return (
        <article
            className={styles.movieCard__container}
            onClick={() => viewDetails(movie)}
        >
            {!movie.poster_path ? (
                <picture>
                    <img
                        src="/blockBuster.svg"
                        alt={movie.title}
                        className={styles.movieCard__img__opcional}
                    />
                </picture>
            ) : (
                <picture>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className={styles.movieCard__img}
                    />
                </picture>
            )}

            <span
                className={styles.movieCard__vote}
                style={{
                    border:
                        movie.vote_average > 6
                            ? "3px solid var(--primary)"
                            : "3px solid var(--border)",
                }}
            >
                ✩ {`${movie.vote_average * 10} % `}
            </span>
        </article>
    );
};
