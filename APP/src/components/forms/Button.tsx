import React from "react";
import { MoonLoader } from "react-spinners";

export const Button = ({
  children,
  className,
  varient,
  isLoading,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  varient?: "primary" | "outlined";
  [key: string]: any;
}) => {
  let buttonClass;
  switch (varient) {
    case "primary":
      buttonClass =
        "bg-blue-500 text-white rounded-lg py-1 mt-2 px-8 text-sm hover:bg-blue-600 cursor-pointer active:bg-blue-700";
      break;
    case "outlined":
      buttonClass =
        "border border-black rounded-lg px-6 py-1 text-sm hover:bg-gray-200 cursor-pointer active:bg-gray-300";
      break;
    default:
      buttonClass =
        "bg-blue-500 text-white rounded-lg py-1 mt-2 px-8 text-sm hover:bg-blue-600 cursor-pointer active:bg-blue-700";
  }
  return (
    <button className={`${buttonClass} ${className}`} {...props}>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MoonLoader size={15} color="#fff" loading={isLoading} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
