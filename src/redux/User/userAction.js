export const authenticateUser = (token) => ({
  type: "AUTHENTICATE_USER",
  payload: token,
});

export const logout = () => ({
  type: "LOGOUT_USER",
});
