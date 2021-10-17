import { ApolloError, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import FormError from "../../components/error/form-error";
import { LOGIN_MUTATION } from "../../graphql/mutation/login";
import { LoginInput } from "../../graphql/__generated__/globalTypes";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../../graphql/__generated__/LoginMutation";

const onCompleted = ({ login: { ok, error, token } }: LoginMutation) => {
  if (ok) console.log("token: ", token);
  if (error) console.error("error: ", error);
};

const onError = (error: ApolloError) => {
  console.error("error: ", error);
};

const Login = () => {
  const {
    register: registerLoginInput,
    getValues: getValuesLoginInput,
    handleSubmit: handleSubmitLoginInput,
    formState: { errors: errorsLoginInput, isValid: isValidLoginInput },
  } = useForm<LoginInput>();

  const [loginMutation, loginMutationResult] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted,
    onError,
  });

  const onSubmit = () => {
    if (!isValidLoginInput) return;

    const { email, password } = getValuesLoginInput();
    loginMutation({ variables: { loginInput: { email, password } } });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
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
            })}
            required
            type="email"
            placeholder="Email"
            className="mb-3 input"
          />
          <FormError
            show={errorsLoginInput.email?.type === "required"}
            message="Email is Required"
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
            show={errorsLoginInput.password?.type === "required"}
            message="Password is Required"
          />
          <FormError
            show={errorsLoginInput.password?.type === "minLength"}
            message="Password minLength is 10"
          />
          <FormError
            show={Boolean(loginMutationResult.error?.message)}
            message={loginMutationResult.error?.message}
          />
          <button className="button mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
