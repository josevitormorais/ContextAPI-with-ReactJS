import React, { useContext } from "react";
import { Context } from "../Context/AuthConext";

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  console.log(authenticated);
  return (
    <button type="button" onClick={handleLogin}>
      Entrar
    </button>
  );
}
