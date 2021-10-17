import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useForm } from "react-hook-form";
import FormError from "../../components/error/form-error";
import { LOGIN_MUTATION } from "../../graphql/mutation/login";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../../graphql/__generated__/LoginMutation";

type LoginFormT = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormT>();

  const [loginMutation, { loading, error, data }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION);

  const onSubmit = () => {
    if (isValid) {
      // submit!
      loginMutation({
        variables: {
          email: "test",
          password: "test",
        },
      });
    }
    console.log(getValues());
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center pt-10 pb-8">
        <h3 className="text-2xl text-gray-800">LOG IN</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="login"
          className="grid gap-5 mt-5 px-5"
        >
          <input
            {...register("email", {
              required: true,
            })}
            required
            type="email"
            placeholder="Email"
            className="mb-3 input"
          />
          <FormError
            show={errors.email?.type === "required"}
            message="Email is Required"
          />
          <input
            {...register("password", {
              required: true,
              minLength: 10,
            })}
            required
            type="password"
            placeholder="Password"
            className="input"
          />
          <FormError
            show={errors?.password?.type === "required"}
            message="Password is Required"
          />
          <FormError
            show={errors?.password?.type === "minLength"}
            message="Password minLength is 10"
          />
          <button className="button mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
