import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { TailSpin } from "react-loader-spinner";
import FutureLayout from "./FutureLayout/FutureLayout";

function App() {
  const [token, setToken] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscribe = true;
    const isAuth = () => {
      if (subscribe) {
        setToken(localStorage.getItem("access_token"));
        setLoading(false);
      }
    };
    isAuth();
    return () => {
      subscribe = false;
    };
  }, [token]);

  const styles = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading) {
    return (
      <div style={styles}>
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
    );
  }

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <FutureLayout />;
}

export default App;
