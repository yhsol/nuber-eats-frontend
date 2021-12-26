import { InMemoryCache } from "@apollo/client";
import { authToken, isLoggedInVar } from "../reactive-variables/auth";

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        token: {
          read() {
            return authToken();
          },
        },
      },
    },
  },
});
