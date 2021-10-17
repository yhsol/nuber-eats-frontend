import React from "react";
import { useForm } from "react-hook-form";

type LoginFormT = {
  email?: string;
  password?: string;
};

const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormT>();

  const onSubmit = () => {
    if (isValid) {
      // submit!
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
          {errors.password && (
            <span className="font-medium text-red-500">
              {errors.password.type === "minLength" &&
                "password minLength is 10"}
            </span>
          )}
          <button className="button mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
