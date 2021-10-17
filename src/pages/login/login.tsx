import React from "react";

/* Components */
import { Form } from "@unform/web";
import SubmitButton from "../../components/button/submitButton";
import TextField from "../../components/inputs/input";

/* Hooks */
import useTheme from "../../hooks/useTheme";

function Login() {
  const theme = useTheme();

  const handleLogin = (data: any) => {
    console.log("formData", data);
  };

  return (
    <Form
      className={`flex items-center
      boder-solid border border-${theme.secondaryColor}-800 
      bg-${theme.color}-800 rounded-sm flex-col p-12`}
      onSubmit={handleLogin}
    >
      <TextField label="Username" name="username" />
      <TextField label="Password" type="password" name="password" />
      <SubmitButton
        height={"42px"}
        width={"100%"}
        type="submit"
        disable={false}
      >
        Login
      </SubmitButton>
    </Form>
  );
}

export default Login;
