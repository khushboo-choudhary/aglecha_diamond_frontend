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
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { logout } from "../../Redux/LoginUserData/Action";
import { getData } from "../../Redux/CategoryData/Action";
import { searchData } from "../../Redux/SearchData/Action";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { debounce } from "lodash";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Toolstip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "green",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const cart = useSelector((store) => store.cart.cart);
  const wishlist = useSelector((store) => store.cart.wishlist);

  const userLogData = useSelector((store) => store.loginUserData.userData);
  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate);

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
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
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
            placeholder="Search"
            className="searchInput"
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => handleSearch()}
            onKeyPress={handleKeyPress}
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

        {isAuth === true ? (
          <div className="dropdown">
            <Chip
              avatar={<Avatar alt="Avatar" src={userLogData[0].profileImage} />}
              label={userLogData[0].name}
              variant="outlined"
            />

            <div className="dropdownInside">
              <a href="/">Hello, {userLogData[0].name}</a>
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
              <Toolstip title="Whislist" color="primary" fontSize="40px">
                <IconButton>
                  {" "}
                  <FavoriteBorderIcon />
                </IconButton>
              </Toolstip>
            </StyledBadge>
          </IconButton>
        </div>

        {/* cart item */}
        <div onClick={() => navigate("/cart")}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="primary">
              <Toolstip title="Cart" color="primary" fontSize="40px">
                <IconButton>
                  {" "}
                  <ShoppingCartIcon />
                </IconButton>
              </Toolstip>
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
