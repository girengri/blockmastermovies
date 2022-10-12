import { useContext } from "react";

import { Modal, ModalBody, ModalHeader } from "reactstrap";

import { ModalContext, MovieModalContext } from "../../context";

import styles from "../../styles/modal.module.css";

export const MovieModal = () => {
    const { isModalOpen, toggleSideModal } = useContext(ModalContext);
    const { movie } = useContext(MovieModalContext);

    const { vote_average, poster_path, title, overview, release_date } = movie;

    return (
        <Modal isOpen={isModalOpen}>
            <ModalHeader className={styles.modal__picture__center}>
                <div>
                    <picture>
                        <img
                            className={styles.modal__image}
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={title}
                        />
                    </picture>

                    <p className={styles.modal__voteAverage}>{`${vote_average * 10}%`}</p>
                </div>
            </ModalHeader>

            <ModalBody>
                <div className={styles.modal__close} onClick={toggleSideModal}>
                    <p className={styles.modal__close__item}>X</p>
                </div>

                <div className={styles.modal__description}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>

                <div className={styles.modal__dates}>
                    <h5>{release_date}</h5>
                </div>
            </ModalBody>
        </Modal>
    );
};
