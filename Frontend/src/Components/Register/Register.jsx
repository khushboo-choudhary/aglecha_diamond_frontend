import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../Redux/LoginUserData/Action';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState();
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)


  const handleRegister = () => {
    const data = {
      name: name,
      email: userEmail,
      mobile: mobile,
      password: userPassword,
    }
    console.log("dataaa", data);
    dispatch(register(data))
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div>

      <h1>Register</h1>

      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField label="Name*" variant="outlined" color="secondary" focused onChange={(e) => setName(e.target.value)} /><br /><br />

          <TextField label="Email*" variant="outlined" color="secondary" focused onChange={(e) => setUserEmail(e.target.value)} /><br /><br />

          <TextField label="Mobile Number*" variant="outlined" color="secondary" focused onChange={(e) => setMobile(e.target.value)} /><br /><br />

          <TextField label="Password*" variant="outlined" color="secondary" focused onChange={(e) => setUserPassword(e.target.value)} /> <br /><br />

          <Button className='ButtonDiv' variant="contained" color="secondary" onClick={() => handleRegister()} >Register</Button><br />

          <Button className='ButtonDiv' variant="contained" color="secondary"  onClick={() => { navigate("/login") }}>Login</Button><br />

          <Button className='ButtonDiv' variant="contained" color="secondary" onClick={() =>
            window.open("https://diamond-ecommerce.herokuapp.com/auth/google", "_self")
          
          }>Sign in with Google</Button>
        </Box>
      </div>

    </div>
  )
}
