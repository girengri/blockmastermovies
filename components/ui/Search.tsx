import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../../styles/search.module.css";

export const Search = () => {
    const { push } = useRouter();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    };

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles.form__input}
                placeholder="Busca tu pelicula favorita"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyUp={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            />
        </form>
    );
};
