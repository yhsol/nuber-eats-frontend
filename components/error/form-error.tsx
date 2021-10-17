import React from "react";

type FormErrorT = {
  show: boolean;
  message: string;
};

const FormError: React.FC<FormErrorT> = ({ show, message }) => {
  if (!show) return null;

  return <span className="font-medium text-red-500">{message}</span>;
};

export default FormError;
