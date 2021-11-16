import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { formatQuestion } from "../utils/helpers";
import { Link } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";

const QuestionCard = ({ questionId, text }) => {
  const state = useSelector(state => state);
  const { authedUser, users, questions } = state;

  // const [question, setQuestion] = useState(null);

  //   const { name, avatar, optionOne, id } = questionId;

  // const setQuestionAction = () => {
  //   let q = questions[questionId];
  //   const formated = formatQuestion(q, users[q.author], authedUser);

  //   // for (let question in questions) {
  //   //   console.log(questions[question], "a question");
  //   // }

  //   // const formated = question
  //   //   ? formatQuestion(question, users[question.author], authedUser)
  //   //   : null;

  //   // console.log(authedUser, "443355^^^^^^");
  //   // console.log(users, "#####^^^^^^");
  //   // console.log(questions, "&&&&^^^^^^");
  //   // console.log(questionId, "QQQQQQ^^^^^^");
  //   // console.log(formated, "QQQQQQ^^^^^^");

  //   // setQuestion(formated);
  // };

  const formatQuestionHandler = () => {
    let question = questions[questionId];
    const formated = formatQuestion(
      question,
      users[question?.author],
      authedUser
    );

    return formated;
  };

  useEffect(() => {
    // setQuestionAction();
    formatQuestionHandler();
    // console.log(questionId, "====");
  }, []);

  return (
    <div>
      {
        <div className='bg-pink-100 my-5 p-5 rounded-xl shadow-xl flex flex-col justify-center text-center h-52 md:w-96'>
          <div className='flex items-center justify-between'>
            {/* <img
              src={question.avatarURL}
              alt={`Avatar of ${question.name}`}
              className='h-20 w-1/5'
            /> */}
            <div className='w-4/5'>
              <p>
                <span className='font-bold italic'>
                  {formatQuestionHandler().name}
                </span>{" "}
                asks:
              </p>
              <p>Would you rather?</p>
              <p>
                <span className='font-bold text-xl'>
                  {formatQuestionHandler().optionOneText}
                </span>{" "}
                or...
                <span className='font-bold text-xl'>
                  {formatQuestionHandler().optionTwoText}
                </span>{" "}
              </p>
            </div>
          </div>
          <Link
            to={`/questions/${"question.id"}`}
            className='flex justify-center'
          >
            <button className='bg-pink-600 text-white font-bold rounded-lg mt-5 py-2 w-full flex justify-center'>
              <span>{"buttonText"}</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 ml-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </button>
          </Link>
        </div>
      }
    </div>
    // <li>

    //   ))}
    // </li>
  );
};

export default QuestionCard;
