export const generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// export const formatQuestion = ({ optionOneText, optionTwoText, author }) => {
//   return {
//     id: generateUID(),
//     timestamp: Date.now(),
//     author,
//     optionOne: {
//       votes: [],
//       text: optionOneText,
//     },
//     optionTwo: {
//       votes: [],
//       text: optionTwoText,
//     },
//   };
// };

export const formatQuestion = (question, author, authedUser) => {
  const { name, avatarURL } = author;
  const { id, optionOne, optionTwo, timestamp } = question;
  return {
    id,
    timestamp,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    avatarURL,
    name,
    optionOneVotes: optionOne.votes,
    optionTwoVotes: optionTwo.votes,
    authedUserAnswered:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser),
  };
};
