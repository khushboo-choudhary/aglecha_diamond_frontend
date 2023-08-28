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
    default:
      return state;
  }
};
