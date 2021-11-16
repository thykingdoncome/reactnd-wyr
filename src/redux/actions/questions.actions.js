import { RECEIVE_QUESTIONS } from "../constants/questions.constants"; // export const TOGGLE_TWEET_LIKE = "TOGGLE_TWEET_LIKE";
// export const ADD_TWEET = "ADD_TWEET";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};
