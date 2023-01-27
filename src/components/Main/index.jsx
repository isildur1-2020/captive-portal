import { useState, useEffect, useRef } from "react";
import { Page } from "./page";

export const MainPage = () => {
  let auxPassword = useRef(null);
  const [state, setState] = useState({
    username: "admin",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const triggerAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const cleanState = () =>
    setState({
      ...state,
      password: "",
    });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { password } = state;
    auxPassword.current = password;
    cleanState();
    triggerAlert();
  };

  return (
    <Page
      state={state}
      showAlert={showAlert}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
