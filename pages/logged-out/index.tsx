import { useRouter } from "next/dist/client/router";
import React from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../../apollo/reactive-variables/auth";

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
  } = useForm();
  const onSubmit = (data: any) => console.log("data: ", data);
  console.log("erros: ", errors);
  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: true,
            validate: (email: string) => email.includes("@gmail.com"),
          })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />

        <div>
          {errors.email?.type === "required" && (
            <span>This field (email) is required</span>
          )}
          {errors.email?.type === "validate" && (
            <span>This field (email) is not validate</span>
          )}
          {errors?.password && <span>This field (password) is required</span>}
        </div>
        <button onClick={handleClick}>Click to login</button>
      </form>
    </div>
  );
}

export default LoggedOut;
