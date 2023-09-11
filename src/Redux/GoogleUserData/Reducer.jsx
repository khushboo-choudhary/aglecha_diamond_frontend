// userReducer.js
const initialState = {
  isAuthenticate: false,
  name: "",
  profileImage: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticate: true,
        name: action.payload.name,
        profileImage: action.payload.profileImage,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticate: false,
        name: "",
        profileImage: "",
      };
    default:
      return state;
  }
};
