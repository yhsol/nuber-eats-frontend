import { ApolloClient } from "@apollo/client";
import { apolloCache } from "./apolloCache";
import { authLink } from "./authLink";
import { httpLink } from "./httpLink";

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: apolloCache,
});
