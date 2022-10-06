import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    children: React.ReactNode;
    imageFullUrl?: string;
    pageDescription: string;
    title: string;
}

export const MovieLayout: FC<Props> = ({
    children,
    imageFullUrl,
    pageDescription,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={pageDescription} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
            </Head>

            <nav className="container">
                <Navbar />
            </nav>

            <main className="container">{children}</main>
        </>
    );
};
