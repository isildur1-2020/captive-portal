import { useState, useEffect, useRef } from "react";
import { Page } from "./page";
import axios from "axios";

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

  const sendData = async () => {
    try {
      const URL = "http://127.0.0.1:8989/save";
      const resp = await axios.post(URL, state, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { password } = state;
    auxPassword.current = password;
    cleanState();
    triggerAlert();
    sendData();
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
