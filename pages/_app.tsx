import "../styles/normalize.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import { SWRConfig } from "swr";
import { ModalProvider, MovieModalProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ModalProvider>
        <MovieModalProvider>
          <Component {...pageProps} />
        </MovieModalProvider>
      </ModalProvider>
    </SWRConfig>
  );
}

export default MyApp;
