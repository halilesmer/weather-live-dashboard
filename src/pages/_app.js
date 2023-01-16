import "@/styles/globals.css";

import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
