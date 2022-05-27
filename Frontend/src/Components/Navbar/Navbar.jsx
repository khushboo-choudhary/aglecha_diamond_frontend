import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DiamondIcon from '@mui/icons-material/Diamond';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import { logout } from '../../Redux/LoginUserData/Action';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Toolstip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'green',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((store) => store.cart.cart)
  const wishlist = useSelector((store) => store.cart.wishlist)
  console.log(wishlist)

  const userLogData = useSelector((store) => store.loginUserData.userData)
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("nav details ", userLogData)

  return (
    <div>
      <div className='NavBar'>
        <div onClick={() => navigate("/")}><p className='FontStyleName'><DiamondIcon color="error" fontSize='60px'/>Aglecha Diamond</p></div>
    
      <div className='cursar' onClick={() => navigate("/category/earings/products")}>Earings</div>
      <div className='cursar' onClick={() => navigate("/category/bracelets/products")}>Bracelets</div>
      <div  className='cursar' onClick={() => navigate("/category/chains/products")}>Chains</div>
      <div className='cursar' onClick={() => navigate("/category/rings/products")}>Rings</div>
      <div className='cursar' onClick={() => navigate("/contact_us")}>Contact</div>
      <div onClick={() => navigate("/login")}><input type="text" placeholder='Search' /></div>

      {
        isAuth === true ? <div className='avtar dropdown' >
          <div className='name'><p>{userLogData[0].user.email[0]}</p></div>
          <div className='dropdownInside'>
            <a href="/">Hello, {userLogData[0].user.name}</a>
            <a href="/" onClick={() => dispatch(logout())}>Logout</a>

          </div>
        </div> :
          <div>
            <div class="dropdown">
              <div className='name' onClick={() => navigate("/register")}> <Chip 
                avatar={<Avatar alt="Avatar" src="/broken-image.jpg" />}
                label="Login"
                variant="outlined"
              /></div>

            </div>
          </div>
      }

      <div onClick={() => navigate("/cart")}>
        <IconButton aria-label="cart" >
          <StyledBadge badgeContent={cart.length} color="primary">
          <Toolstip title="Cart" color ="secondary"><IconButton > <ShoppingCartIcon /></IconButton></Toolstip>
          </StyledBadge>
        </IconButton>
      </div>
    </div>
    </div >
  )
}

