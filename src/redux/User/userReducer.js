const INITIAL_STATE = {
  token: null,
  isAuthenticated: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
