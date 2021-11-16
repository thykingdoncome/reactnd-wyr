import { RECEIVE_QUESTIONS } from "../constants/questions.constants";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
};

export default questions;
