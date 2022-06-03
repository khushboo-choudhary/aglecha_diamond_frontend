import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../../Redux/LoginUserData/Action';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [useeremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("home ", isAuth)

  const handleAdd = () => {
    const data = {
      "email": useeremail,
      "password": password
    }
    console.log("hello motu", data)
    dispatch(login(data));
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div className="loginHeading">
      <div id="logopng">
        <img className="logo" src="logodiamonds.jpg" alt="logo" />
        <h1>Login</h1>
      </div>
      <div>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '30ch'},
          }}
          
          noValidate
          autoComplete="off"
        >

          <TextField id='color1' label="Email" variant="outlined" color="success" focused onChange={(e) => setUseremail(e.target.value)} /><br /><br />

          <TextField  id='color2' label="Password" variant="outlined" color="success" focused onChange={(e) => setPassword(e.target.value)} /> <br /><br />

          <Button  size="large" className='ButtonDiv' variant="contained" color="success" onClick={() => handleAdd()} >Login</Button><br /> <br />

          <Button  size="large"className='ButtonDiv' variant="contained" color="success" onClick={() => { navigate("/register") }} >Register</Button><br /> <br />

          <Button  size="large" className='ButtonDiv' variant="contained" color="success" onClick={() =>
            window.open("https://diamond-ecommerce.herokuapp.com/auth/google", "_self")

          }> <GoogleIcon/>&nbsp;
          Sign in with Google </Button>

        </Box>
      </div>
      <ToastContainer />
    </div>
  )
}
