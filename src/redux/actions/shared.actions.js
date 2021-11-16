import { getInitialData } from "../../utils/api";
import { receiveUsers } from "./users.actions.";
import { receiveQuestions } from "./questions.actions";
import { showLoading, hideLoading } from "react-redux-loading";

export const handleInitialData = () => async dispatch => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  });
};
