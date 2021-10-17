import React from "react";
import { useField } from "@unform/core";
import { format } from "date-fns";
import useTheme from "../../hooks/useTheme";

type InputIntrisecProps = JSX.IntrinsicElements["input"];

interface InputProps extends InputIntrisecProps {
  label?: string;
  name: string;
  wrapperClassname?: string;
  disable?: boolean;
  icon?: React.ReactNode;
}

function TextInput({ ...props }: InputProps) {
  const { label, name, wrapperClassname, disable, icon, ...rest } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const { fieldName, registerField, error } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className={`flex flex-col w-52 mb-4 ${wrapperClassname}`.trim()}>
      <label className={`font-bold text-${theme.secondaryColor}-600`} htmlFor={name}>
        {label}
      </label>
      <div
        className={`
          flex border border-solid bg-white border-${theme.secondaryColor}-600 rounded-md 
          p-2 w-full items-center
        `}
      >
        {icon}
        <input
          disabled={disable}
          style={{width: '100%'}}
          className={`outline-none bg-white border-none ml-2`}
          name={name}
          ref={inputRef}
          {...rest}
        />
      </div>
      <p className='text-red-500 text-sm'>{error}</p>
    </div>
  );
}

export default TextInput;