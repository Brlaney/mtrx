import { useState } from 'react';
import { questions } from '@/lib/data/stiffness/quiz';
// import './scss/index.scss';

export default function TestThree() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  };

  return (
    <>
      <div id='main' className='uk-flex uk-flex-middle uk-width-4-5'>
        {showScore ? (
          <>
            <div id='conditional' className='uk-card uk-card-large uk-card-default uk-card-body'>
              <div id='conditionalHeader' className='uk-card-title uk-text-center'>
                <h3 id='header1'>Answered correctly
                  <span className='span'> {score} </span>
                </h3>
                <h3 id='header1'>
                  correct out of
                  <span className='spanR'> {questions.length} </span>
                  questions.
                </h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id='card' className='uk-card uk-align-center uk-card-default uk-card-body'>
              <div id='cardBadge' className='uk-card-badge uk-label'>
                {currentQuestion + 1}/{questions.length}
              </div>
              <div id='header' className='uk-card-title uk-text-justify'>
                <h2 id='question' className='uk-text-lead uk-align-center'>
                  <span className='span'>
                    Question {currentQuestion + 1}.
                  </span>
                </h2>
                <h3 id='questiontext' className='uk-heading-divider'>
                  {questions[currentQuestion].questionText}
                </h3>
              </div>
              <div id='buttonColumn' className='uk-flex' uk-grid='true'>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    id='btn'
                    className='uk-button uk-button-secondary uk-box-shadow-hover uk-width-1-2'
                    key={answerOption.answerText}
                    onClick={
                      () => handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
};
