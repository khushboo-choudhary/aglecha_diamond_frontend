import React, { useEffect } from "react";
import "./Navbar.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { logout } from "../../Redux/LoginUserData/Action";
import { getData } from "../../Redux/CategoryData/Action";
import { searchData } from "../../Redux/SearchData/Action";
import { setUser } from "../../Redux/GoogleUserData/Action";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const [authenticate, setAuthenticate] = useState(false);
  // console.log("frdndkjhwfiu", searchParams);
  const userName = searchParams.get("name");
  const profileImage = searchParams.get("profile");
  const { id } = useParams();
  const cart = useSelector((store) => store.cart.cart);
  const wishlist = useSelector((store) => store.cart.wishlist);

  const userLogData = useSelector((store) => store.loginUserData.userData);

  // const userName = useSelector((store) => store.loginUserData.userName);

  // const profileImage = useSelector((store) => store.loginUserData.profileImage);
  console.log("hyfyfbnavbar", userLogData);
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);
  const checkingGoogle = useSelector((store) => store.userData);
  console.log("-==-wqod-=192", checkingGoogle);
  const googleUser = useSelector((store) => store.userData.name);
  const googleImage = useSelector((store) => store.userData.profileImage);
  const isAuthenticate = useSelector((store) => store.userData.isAuthenticate);
  console.log("ndksdihiuh", isAuthenticate);
  // const searchParams = new URLSearchParams(location.search);
  // const token = searchParams.get("token");
  // const userName = searchParams.get("name");
  // const profileImage = searchParams.get("profile");

  useEffect(() => {
    if (userName && profileImage) {
      toast.info("Google authentication successful!");
      // toast("Google authentication successful!");
      dispatch(setUser(userName, profileImage));
    }
    console.log(
      "--------------------",
      userName,
      "=============",
      profileImage
    );
    alert("Google authentication successful!");
  }, [dispatch, userName, profileImage]);

  // console.log("=[=", authenticate);
  const data = useSelector((store) => store.categoryReducer.categoryData[0]);
  const loading = useSelector((store) => store.categoryReducer.loading);

  const searchResults = useSelector((state) => state.searchReducer.searchData);
  const loadings = useSelector((state) => state.searchReducer.loading);

  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = debounce((query) => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    dispatch(searchData(query));
  }, 300);

  const handleSearch = () => {
    const query = searchTerm;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  const handleProductClick = (result) => {
    navigate(`/${result.tag}/${result._id}`);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const dataSend = {
      id,
    };

    dispatch(getData(dataSend));
    dispatch(searchData(searchTerm));
  }, [id, dispatch, searchTerm]);

  return (
    <div>
      <div className="NavBar">
        <div id="box" onClick={() => navigate("/")}>
          <img src="monee.png" alt="logodiamonds" id="logo" />
          <p className="FontStyleName">Aglecha Diamond</p>
        </div>

        <div
          className="cursar"
          onClick={() => navigate("/category/earings/products")}
        >
          Earings
        </div>
        <div
          className="cursar"
          onClick={() => navigate("/category/bracelets/products")}
        >
          Bracelets
        </div>
        <div
          className="cursar"
          onClick={() => navigate("/category/chains/products")}
        >
          Chains
        </div>
        <div
          className="cursar"
          onClick={() => navigate("/category/rings/products")}
        >
          Rings
        </div>
        <div className="cursar" onClick={() => navigate("/contact_us")}>
          Contact
        </div>
        <div className="searchBar">
          <button onClick={handleSearch} className="searchButton">
            <SearchRoundedIcon />
          </button>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search....."
            className="searchInput"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {loadings ? (
            <p>Loading...</p>
          ) : searchResults.length > 0 && searchTerm !== "" ? (
            <div className="searchResultsDropdown">
              {searchResults.map((result) => (
                <div
                  className="productCard"
                  onClick={() => handleProductClick(result)}
                  key={result._id}
                >
                  <div className="productImageWrapper">
                    <img
                      src={result.image}
                      alt={result.description}
                      className="productImage"
                    />
                  </div>
                  <div className="productDetails">
                    <h3 className="productTag">
                      {capitalizeFirstLetter(result.tag)}
                    </h3>
                    <p className="productName">{result.description}</p>
                    <p className="productPrice">Price: ₹{result.price.sp}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            searchTerm !== "" && <p className="noResults">No results found.</p>
          )}
        </div>
        {/* {console.log("checking the profileImage ", profileImage)} */}
        {isAuth || isAuthenticate === true ? (
          <div className="dropdown">
            <Chip
              avatar={
                <Avatar
                  alt="Avatar"
                  src={userLogData[0]?.profileImage || googleImage}
                />
              }
              label={userLogData[0]?.name || googleUser}
              variant="outlined"
            />

            <div className="dropdownInside">
              <a href="/">Hello, {userLogData[0]?.name || googleUser}</a>
              <a href="/" onClick={() => dispatch(logout())}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div class="dropdown">
              <div className="name" onClick={() => navigate("/register")}>
                {" "}
                <Chip
                  avatar={<Avatar alt="Avatar" src="/broken-image.jpg" />}
                  label="Login"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        )}

        {/* whislist */}
        <div onClick={() => navigate("/wishlist")}>
          <IconButton aria-label="wishlist">
            <StyledBadge badgeContent={wishlist.length} color="primary">
              <Tooltip
                title={
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                    }}
                  >
                    Wishlist
                  </span>
                }
                arrow
                style={{ color: "blue" }}
              >
                <IconButton>
                  {" "}
                  <FavoriteBorderIcon />
                </IconButton>
              </Tooltip>
            </StyledBadge>
          </IconButton>
        </div>

        {/* cart item */}
        <div onClick={() => navigate("/cart")}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="primary">
              <Tooltip
                arrow
                title={
                  <span style={{ fontSize: "15px", fontWeight: "bolder" }}>
                    Cart
                  </span>
                }
                style={{ color: "blue" }}
              >
                <IconButton>
                  {" "}
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </StyledBadge>
          </IconButton>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
