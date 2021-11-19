import { combineReducers } from "redux";
import authedUser from "./authedUser.reducer";
import users from "./users.reducer";
import questions from "./questions.reducer";

export default combineReducers({
  authedUser,
  users,
  questions,
});
