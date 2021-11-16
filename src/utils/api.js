import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./api.creators";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
};

export const saveQuestion = question => _saveQuestion(question);

export const sveQuestionAnswer = answer => _saveQuestionAnswer(answer);
