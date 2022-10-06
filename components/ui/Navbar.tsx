import { FC } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../../styles/header.module.css";
import { Search } from "./";

export const Navbar: FC = () => {
    const { asPath } = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.header__container__links}>
                <picture>
                    <img src="/blockBuster.svg" alt="logo block master" />
                </picture>

                <nav className={styles.nav}>
                    {asPath === "/" ? (
                        <Link href="/" passHref>
                            <a className={styles.header__link__hover}>Todas</a>
                        </Link>
                    ) : (
                        <Link href="/" passHref>
                            <a className={styles.header__link}>Todas</a>
                        </Link>
                    )}

                    {asPath === "/popular/mostPopular" ? (
                        <Link href="/popular/mostPopular" passHref>
                            <a className={styles.header__link__hover}>Mas valoradas</a>
                        </Link>
                    ) : (
                        <Link href="/popular/mostPopular" passHref>
                            <a className={styles.header__link}>Mas valoradas</a>
                        </Link>
                    )}

                    {asPath === "/popular/lessPopular" ? (
                        <Link href="/popular/lessPopular" passHref>
                            <a className={styles.header__link__hover}>Menos valoradas</a>
                        </Link>
                    ) : (
                        <Link href="/popular/lessPopular" passHref>
                            <a className={styles.header__link}>Menos valoradas</a>
                        </Link>
                    )}
                </nav>
            </div>

            <Search />
        </header>
    );
};
