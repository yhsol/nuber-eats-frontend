import { makeVar } from "@apollo/client";
import { getToken } from "../../../funcs/auth/auth.funcs";

export const isLoggedInVar = makeVar(Boolean(getToken()));
export const authToken = makeVar(getToken());
