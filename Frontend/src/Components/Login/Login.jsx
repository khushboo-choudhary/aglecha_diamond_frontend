import React, { useState } from 'react'
import "./Login.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div>
      <h1>Login</h1>

      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField label="Email" variant="outlined" color="secondary" focused onChange={(e) => setUseremail(e.target.value)} /><br /><br />

          <TextField label="Password" variant="outlined" color="secondary" focused onChange={(e) => setPassword(e.target.value)} /> <br /><br />

          <Button className='ButtonDiv' variant="contained" color="secondary" onClick={() => handleAdd()} >Login</Button><br />

          <Button className='ButtonDiv' variant="contained" color="secondary" onClick={() => { navigate("/register") }} >Register</Button><br />

          <Button className='ButtonDiv' variant="contained" color="secondary" onClick={() =>
            window.open("https://diamond-ecommerce.herokuapp.com/auth/google", "_self")
            
          }>Sign in with Google</Button>

        </Box>
      </div>
      <ToastContainer />
    </div>
  )
}
