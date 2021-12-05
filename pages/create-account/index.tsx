import { ApolloError, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import FormError from "../../components/error/form-error";
import {
  CreateAccountInput,
  UserRole,
} from "../../graphql/__generated__/globalTypes";
import Link from "next/link";
import Head from "next/head";
import { CREATE_ACCOUNT_MUTATION } from "../../graphql/mutation/createAccount";
import {
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from "../../graphql/__generated__/CreateAccountMutation";

const onCompleted = ({
  createAccount: { ok, error },
}: CreateAccountMutation) => {
  if (ok) console.log("onCompleted ok: ", ok);
  if (error) console.error("onCompleted error: ", error);
};

const onError = (error: ApolloError) => {
  console.error("onError: ", error);
};

const CreateAccount = () => {
  const {
    register: registerCreateAccountInput,
    getValues: getValuesCreateAccountInput,
    handleSubmit: handleSubmitCreateAccountInput,
    watch,
    formState,
  } = useForm<CreateAccountInput>({
    mode: "onChange",
    defaultValues: {
      role: UserRole.Client,
    },
  });

  const [createAccountMutation, createAccountMutationResult] = useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
    onError,
  });

  const isDisabeldSubmit =
    Object.keys(formState.errors).length > 0 ||
    createAccountMutationResult.loading;

  const onSubmit = () => {
    if (isDisabeldSubmit) return;

    const { email, password, role } = getValuesCreateAccountInput();
    createAccountMutation({
      variables: { createAccountInput: { email, password, role } },
    });
  };
  console.log("watch: ", watch());
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <Head>
        <title>CreateAccount | Nuber Eats</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center pt-10 pb-8">
        <h3 className="text-2xl text-gray-800">CREATE ACCOUNT</h3>
        <form
          onSubmit={handleSubmitCreateAccountInput(onSubmit)}
          action="login"
          className="grid gap-5 mt-5 px-5"
        >
          <input
            {...registerCreateAccountInput("email", {
              required: true,
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
          <input
            {...registerCreateAccountInput("password", {
              required: true,
              minLength: 10,
            })}
            required
            type="password"
            placeholder="Password"
            className="mb-3 input"
          />
          <FormError
            show={formState.errors.password?.type === "required"}
            message="Password is Required"
          />
          <FormError
            show={formState.errors.password?.type === "minLength"}
            message="Password minLength is 10"
          />
          <select
            {...registerCreateAccountInput("role", {
              required: true,
            })}
            className="input"
          >
            {Object.keys(UserRole).map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>

          <Button
            disabled={!formState.isValid}
            loading={createAccountMutationResult.loading}
            title="CreateAccount!"
            onSubmit={() => console.log("here")}
          />
          <FormError
            show={Boolean(
              createAccountMutationResult.data?.createAccount.error
            )}
            message={String(
              createAccountMutationResult.data?.createAccount.error
            )}
          />
        </form>
        <div className="mt-3">
          Already have an account?{" "}
          <span className="text-lime-500 hover:underline">
            <Link href="/login">Log In!</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
