import { saveQuestion, saveQuestionAnswer } from "../../utils/api";

import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../constants/questions.constants";

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

const addAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: ADD_ANSWER,
    answerPayload: { authedUser, qid, answer },
  };
};

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const handleAddQuestion =
  (optionOne, optionTwo, navigate) => (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .then(() => {
        navigate("/");
      });
  };

export const handleSaveAnswer = (qid, answer) => (dispatch, getState) => {
  const { authedUser } = getState();

  return saveQuestionAnswer({
    authedUser,
    qid,
    answer,
  }).then(() => {
    dispatch(addAnswer({ authedUser, qid, answer }));
  });
};
