import { useState } from "react";
import type { NextPage } from "next";

import { MovieLayout } from "../components/layouts";
import { MovieModal } from "../components/movies";
import { CarouselMovies, Pagination } from "../components/ui";

import styles from "../styles/movieList.module.css";

const HomePage: NextPage = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <MovieLayout
      title="Block Master"
      pageDescription="Busca las peliculas del momento aquí"
    >
      <CarouselMovies />

      <h2 className={styles.movieList__title}>Todas las peliculas</h2>

      <Pagination pageIndex={pageIndex} />

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

export default HomePage;
