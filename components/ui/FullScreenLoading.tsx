import styles from "../../styles/loading.module.css";

export const FullScreenLoading = () => {
    return (
        <section className={styles.loading__container}>
            <h2 className={styles.loading__title}>Cargando...</h2>
        </section>
    );
};
