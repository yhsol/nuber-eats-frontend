import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../apollo";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("apollo: ", apolloClient);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
export default MyApp;
