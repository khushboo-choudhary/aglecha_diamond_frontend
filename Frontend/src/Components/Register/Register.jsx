import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
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
    <div className="loginHeading">
      <div id="logopng">
        <img className="logo" src="logodiamonds.png" alt="logo" />
        <h1>Register</h1>
      </div>
      <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField id='color1' label="Name*" variant="outlined" type="text"  color="success"   focused onChange={(e) => setName(e.target.value)} /><br /><br />

          <TextField  id='color2' label="Email*" variant="outlined" type="email"  color="success"  pattern= "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" focused onChange={(e) => setUserEmail(e.target.value)} /><br /><br />

          <TextField id='color3' label="Mobile Number*" variant="outlined" type="phone" inputProps={{maxLength: 10}}  color="success" focused onChange={(e) => setMobile(e.target.value)} /><br /><br />

          <TextField  id='color4' label="Password*" variant="outlined" type="password"  inputProps={{maxLength: 6}}  color="success" focused onChange={(e) => setUserPassword(e.target.value)} /> <br /><br />


          <Button  size="large" className='ButtonDiv' variant="contained" color="success" onClick={() => handleRegister()} >Register</Button><br /><br />

          <Button size="large" className='ButtonDiv' variant="contained" color="success"  onClick={() => { navigate("/login") }}>Login</Button><br /><br />

          <Button size="large" className='ButtonDiv' variant="contained" color="success" onClick={() =>
            window.open("https://diamond-server-backend.herokuapp.com/auth/google", "_self")
          
          }> <GoogleIcon/>&nbsp; Sign in with Google</Button>
        </Box>
      </div>

    </div>
  )
}
