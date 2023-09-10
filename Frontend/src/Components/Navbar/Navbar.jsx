import React, { useEffect, useState } from "react";
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
import { logouts } from "../../Redux/GoogleUserData/Action";
import { getData } from "../../Redux/CategoryData/Action";
import { searchData } from "../../Redux/SearchData/Action";
import { setUser } from "../../Redux/GoogleUserData/Action";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { debounce } from "lodash";
import { useLocation } from "react-router-dom";

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
  const userName = searchParams.get("name");
  const profileImage = searchParams.get("profile");
  const { id } = useParams();
  const cart = useSelector((store) => store.cart.cart);
  const wishlist = useSelector((store) => store.cart.wishlist);
  const userLogData = useSelector((store) => store.loginUserData.userData);
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);
  const googleUser = useSelector((store) => store.userData.name);
  const googleImage = useSelector((store) => store.userData.profileImage);
  const isAuthenticate = useSelector((store) => store.userData.isAuthenticate);
  const searchResults = useSelector((state) => state.searchReducer.searchData);
  const loadings = useSelector((state) => state.searchReducer.loading);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState([]); // State for search results
  const [load, setLoad] = useState(false);

  // console.log("checking store value", userLogData);
  useEffect(() => {
    if (userName && profileImage) {
      dispatch(setUser(userName, profileImage));
    }
  }, [dispatch, userName, profileImage]);

  const debouncedSearch = debounce((query) => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    setLoad(true);
    dispatch(searchData(query))
      .then((results) => {
        setSearchValue(results);
        setLoad(false);
      })
      .catch((error) => {
        console.error("Error searching:", error);
        setLoad(false);
      });
  }, 300);

  const handleSearch = () => {
    const query = searchTerm;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  const handleProductClick = (result) => {
    navigate(`/${result.tag}/${result._id}`);
    // After clicking a result, clear the search term and results.
    setSearchTerm("");
    setSearchValue([]);
  };

  useEffect(() => {
    // Add an event listener to the document to close the search results
    // when clicking anywhere on the page.
    const closeSearchResults = () => {
      setSearchTerm("");
      setSearchValue([]);
    };

    document.addEventListener("click", closeSearchResults);

    return () => {
      // Remove the event listener when the component unmounts.
      document.removeEventListener("click", closeSearchResults);
    };
  }, [searchValue]);

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
            onClick={(e) => e.stopPropagation()}
          />
          {loadings ? (
            <p>Loading...</p>
          ) : (
            searchTerm !== "" && (
              <div className="searchResultsDropdown">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
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
                        <p className="productPrice">
                          Price: ₹{result.price.sp}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="noResults">No results found.</p>
                )}
              </div>
            )
          )}
        </div>

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
              <a
                href="/"
                onClick={() => dispatch(logout() || dispatch(logouts()))}
              >
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="dropdown">
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
          <div onClick={() => navigate("/wishlist")}>
            <IconButton aria-label="wishlist">
              <StyledBadge badgeContent={wishlist.length} color="error">
                <FavoriteBorderIcon style={{ color: "blue" }} />
              </StyledBadge>
            </IconButton>
          </div>
        </Tooltip>

        {/* cart item */}
        <Tooltip
          title={
            <span
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
              }}
            >
              Cart
            </span>
          }
          arrow
          style={{ color: "blue" }}
        >
          <div onClick={() => navigate("/cart")}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cart.length} color="error">
                <ShoppingCartIcon style={{ color: "blue" }} />
              </StyledBadge>
            </IconButton>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
