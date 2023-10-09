import React, { useState, useEffect } from "react";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../Redux/LoginUserData/Action";

const styles = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid green",
  },
  label: {
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    borderRadius: "8px",
  },
};
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [useeremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);

  const handleAdd = () => {
    const data = {
      email: useeremail,
      password: password,
    };
    dispatch(login(data));
  };

  useEffect(() => {
    // Use the useEffect hook to navigate once the component has rendered
    if (isAuth === true) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const performGoogle = () => {
    window.open("https://aglecha-backend.onrender.com/auth/google", "_self");
  };

  return (
    <div className="loginHeading">
      <div id="logopng">
        <img className="logo" src="logodiamonds.png" alt="logo" />
        <h1>Login</h1>
      </div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="color1"
            label="Email"
            variant="outlined"
            type="email"
            focused
            InputLabelProps={{
              style: styles.label,
            }}
            InputProps={{
              style: styles.input,
            }}
            pattern="/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/"
            onChange={(e) => setUseremail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="color2"
            label="Password"
            variant="outlined"
            InputLabelProps={{
              style: styles.label,
            }}
            InputProps={{
              style: styles.input,
            }}
            type="password"
            inputProps={{ maxLength: 6 }}
            focused
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
          <Button
            size="large"
            className="ButtonDiv"
            variant="contained"
            color="success"
            onClick={() => handleAdd()}
          >
            Login
          </Button>
          <br /> <br />
          <Button
            size="large"
            className="ButtonDiv"
            variant="contained"
            color="success"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <br /> <br />
          <Button
            size="large"
            className="ButtonDiv"
            variant="contained"
            color="success"
            onClick={() => performGoogle()}
          >
            {" "}
            <GoogleIcon />
            &nbsp; Sign in with Google{" "}
          </Button>
        </Box>
      </div>
    </div>
  );
}
