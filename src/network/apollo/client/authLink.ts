import { setContext } from "@apollo/client/link/context";
import { AUTHORIZATION_KEY } from "../../../constants/auth.const";
import { authToken } from "../reactive-variables/auth";

export const authLink = setContext((_, { headers }) => {
  const token = authToken();

  return {
    headers: {
      ...headers,
      [AUTHORIZATION_KEY]: token ? token : "",
    },
  };
});
