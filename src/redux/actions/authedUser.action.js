import { SET_AUTHED_USER } from "../constants/users.constants";

export const setAuthedUser = id => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};
