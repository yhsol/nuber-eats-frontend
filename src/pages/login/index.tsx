import { ApolloError, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import FormError from "../../components/error/form-error";
import { LOGIN_MUTATION } from "../../network/graphql/mutation/login";
import { LoginInput } from "../../network/graphql/__generated__/globalTypes";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../../network/graphql/__generated__/LoginMutation";
import Link from "next/link";
import Head from "next/head";
import { EMAIL_REGEX } from "../../utils/regex/email";
import {
  authToken,
  isLoggedInVar,
} from "../../network/apollo/reactive-variables/auth";
import Router from "next/router";
import { setToken } from "../../utils/auth/auth.funcs";

/**
 *
 * @description
 * ok: isLoggedInVar to true, push to "/"
 * @description
 * error: console.error("onCompleted error: ", error)
 */
const onCompleted = ({ login: { ok, error, token } }: LoginMutation) => {
  if (ok && token) {
    setToken(token);
    authToken(token);
    isLoggedInVar(true);
    Router.push("/");
  }
  if (error) console.error("onCompleted error: ", error);
};

const onError = (error: ApolloError) => {
  console.error("onError: ", error);
};

const Login = () => {
  const {
    register: registerLoginInput,
    getValues: getValuesLoginInput,
    handleSubmit: handleSubmitLoginInput,
    formState,
  } = useForm<LoginInput>({
    mode: "onChange",
  });

  const [loginMutation, loginMutationResult] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
    onError,
  });

  const isDisabeldSubmit =
    Object.keys(formState.errors).length > 0 || loginMutationResult.loading;

  const onSubmit = () => {
    if (isDisabeldSubmit) return;

    const { email, password } = getValuesLoginInput();
    loginMutation({ variables: { loginInput: { email, password } } });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <Head>
        <title>Login | Nuber Eats</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center pt-10 pb-8">
        <h3 className="text-2xl text-gray-800">LOG IN</h3>
        <form
          onSubmit={handleSubmitLoginInput(onSubmit)}
          action="login"
          className="grid gap-5 mt-5 px-5"
        >
          <input
            {...registerLoginInput("email", {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            required
            type="email"
            placeholder="Email"
            className="mb-3 input"
          />
          <FormError
            show={formState.errors.email?.type === "required"}
            message="Email is Required"
          />
          <FormError
            show={formState.errors.email?.type === "pattern"}
            message="Email is not valid"
          />
          <input
            {...registerLoginInput("password", {
              required: true,
              minLength: 10,
            })}
            required
            type="password"
            placeholder="Password"
            className="input"
          />
          <FormError
            show={formState.errors.password?.type === "required"}
            message="Password is Required"
          />
          <FormError
            show={formState.errors.password?.type === "minLength"}
            message="Password minLength is 10"
          />

          <Button
            disabled={!formState.isValid}
            loading={loginMutationResult.loading}
            title="Login!"
            onSubmit={() => console.log("here")}
          />
          <FormError
            show={Boolean(loginMutationResult.data?.login.error)}
            message={loginMutationResult.data?.login.error || ""}
          />
        </form>
        <div className="mt-3">
          New to Nuber?{" "}
          <span className="text-lime-500 hover:underline">
            <Link href="/create-account">Create Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
