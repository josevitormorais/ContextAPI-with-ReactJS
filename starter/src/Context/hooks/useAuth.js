import { useState, useEffect } from "react";
import history from "../../history";
import api from "../../api";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `"Bearer", ${JSON.parse(token)}`;

      setAuthenticated(true);
    }

    setloading(false);
  }, []);

  async function handleLogin() {
    const {
      data: { token },
    } = await api.post("/authenticate");

    localStorage.setItem("token", JSON.stringify(token));
    api.defaults.headers.Authorization = `"Bearer", ${token}`;
    setAuthenticated(true);
    history.push("/users");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
