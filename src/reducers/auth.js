export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGGET_OUT":
      return action.payload;
    default:
      return state;
  }
};
