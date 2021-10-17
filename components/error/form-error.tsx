import React from "react";

type FormErrorT = {
  show: boolean;
  message: string;
};

const FormError: React.FC<FormErrorT> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div>
      <span className="font-medium text-red-500">{message}</span>
    </div>
  );
};

export default FormError;
