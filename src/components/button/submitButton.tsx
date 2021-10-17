import React from "react";

import useTheme from "../../hooks/useTheme";

type ButtonIntrisecProps = JSX.IntrinsicElements["button"];

interface ButtonProps extends ButtonIntrisecProps {
  label?: string;
  disable?: boolean;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

function SubmitButton({ ...props }: ButtonProps) {
  const { label, disable, height, children, width, ...rest } = props;

  const theme = useTheme();

  console.log("theme", theme);

  return (
    <button
      className={`flex mt-6 rounded-sm text-${theme.color}-800 transition duration-500 
      focus:outline-none justify-center items-center border-${theme.secondaryColor}-600 
      border border-solid hover:bg-${theme.color}-800 bg-${theme.secondaryColor}-600 
      hover:text-${theme.secondaryColor}-600 p-4 font-bold`}
      style={{ width: width, height: height }}
      {...rest}
    >
      <span>{label}</span>
      {children}
    </button>
  );
}

export default SubmitButton;
