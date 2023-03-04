import useQuiz from './hooks/useQuiz'
import QuizBox from './components/QuizBox'
import AnswerButton from './components/AnswerButton'
import './App.css'

function App() {
  const [{ quizList, quizIndex }, dispatch] = useQuiz()

  return (
    <div className="app">
      {quizList.length > 0 && (
        <QuizBox
          question={quizList[quizIndex].question}
          quizIndex={quizIndex}
          numberOfQuizzes={quizList.length}
        >
          {quizList[quizIndex].shuffled_answers.map((answer) => (
            <AnswerButton
              key={answer}
              answerText={answer}
              correctAnswer={quizList[quizIndex].correct_answer}
              currentAnswer={quizList[quizIndex].choosen_answer}
              onClick={() =>
                dispatch({ type: 'SELECT_ANSWER', payload: answer })
              }
            />
          ))}
        </QuizBox>
      )}

      <div className="button-container">
        <button
          className="next-button"
          onClick={() => dispatch({ type: 'PREV_QUESTION' })}
          disabled={quizIndex === 0}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
