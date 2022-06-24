import React, { useEffect } from 'react'
import "./Navbar.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { logout } from '../../Redux/LoginUserData/Action';
import { getData } from '../../Redux/CategoryData/Action';


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
  const { id } = useParams()
  console.log("vadai", id)
  const cart = useSelector((store) => store.cart.cart)
  const wishlist = useSelector((store) => store.cart.wishlist)
  console.log(wishlist)

  const userLogData = useSelector((store) => store.loginUserData.userData)
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("nav details ", userLogData)

  const data = useSelector((store) => store.categoryReducer.categoryData[0])
  const loading = useSelector((store) => store.categoryReducer.loading)
  console.log("data coming from redux", data)
  console.log("loading with spinner", loading)

  useEffect(() => {

    const dataSend = {
      id,
    }
    dispatch(getData(dataSend))

  }, [id, dispatch])
  return (
    <div>
      <div className='NavBar'>
        <div id="box" onClick={() => navigate("/")}><img src="logodiamonds.png" alt="logodiamonds" id="logo" /><p className='FontStyleName'>Aglecha Diamond</p></div>

        <div className='cursar' onClick={() => navigate("/category/earings/products")}>Earings</div>
        <div className='cursar' onClick={() => navigate("/category/bracelets/products")}>Bracelets</div>
        <div className='cursar' onClick={() => navigate("/category/chains/products")}>Chains</div>
        <div className='cursar' onClick={() => navigate("/category/rings/products")}>Rings</div>
        <div className='cursar' onClick={() => navigate("/contact_us")}>Contact</div>
        <div><input type="text" placeholder='Search' onClick={(event) => navigate(`/category/${event.target.value}/products`)} />
       

        </div>
      
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
              <Toolstip title="Cart" color="error" fontSize="40px"><IconButton > <ShoppingCartIcon /></IconButton></Toolstip>
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

