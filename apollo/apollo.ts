import { ApolloClient, InMemoryCache } from "@apollo/client";
import { isLoggedInVar } from "./reactive-variables/auth";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
