import React from "react";

type Button = {
  disabled: boolean;
  loading: boolean;
  title: string;
  onSubmit: React.FormEventHandler<HTMLButtonElement>;
};

function Button({ disabled, loading, title, onSubmit }: Button) {
  return (
    <button
      className={`
      py-3 px-2 text-white text-lg rounded-lg focus:outline-none hover:opacity-90 transition-colors mt-3 
      ${disabled ? " bg-gray-300" : " bg-lime-500"}`}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      {loading ? "Loading..." : title}
    </button>
  );
}

export default Button;
