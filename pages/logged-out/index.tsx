import { useRouter } from "next/dist/client/router";
import React from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../../apollo/reactive-variables/auth";

type InputType = { email: string; password: string };

interface IForm {
  email: string;
  password: string;
}

function LoggedOut() {
  const router = useRouter();
  const handleClick = () => {
    // isLoggedInVar(true);
    // router.back();
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: InputType) => {
    console.log("data: ", data);
  };

  console.log("errors: ", errors);
  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "email is required",
            validate: (email: string) => email.includes("@gmail.com"),
          })}
        />
        {errors.email?.message && (
          <span className="font-bold text-red-600">{errors.email.message}</span>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "password is required",
            validate: (password: string) =>
              password.length < 5 || password.length > 14,
          })}
        />
        <button onClick={handleClick}>Click to login</button>
      </form>
    </div>
  );
}

export default LoggedOut;
