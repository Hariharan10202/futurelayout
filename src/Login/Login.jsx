import React, { useState } from "react";
import styles from "./Login.module.css";
import { generateToken } from "../Redux/generatetoken";
import { TailSpin } from "react-loader-spinner";

const Login = ({ setToken }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      data.username === "fwdadmn01@gmail.com" &&
      data.password === "ZXCVBNM67$*"
    ) {
      setError(false);
      const result = await generateToken(data);
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      localStorage.setItem("access_token", result.access_token);
      setToken(result);
    } else {
      setToken(false);
      setError(true);
    }
  };

  const inputHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };

  return (
    <>
      {loading ? (
        <div className={styles.spinner}>
          <TailSpin
            height="80"
            width="80"
            color="#000000"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <form onSubmit={submitHandler} className={styles.container}>
          <h1>Sign in</h1>
          <input
            id="username"
            onChange={inputHandler}
            type="text"
            required
            placeholder="Username."
          />
          <input
            id="password"
            onChange={inputHandler}
            type="password"
            required
            autoComplete="true"
            placeholder="Password"
          />
          <p>{error && "Invalid username or password"}</p>
          <button>Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
