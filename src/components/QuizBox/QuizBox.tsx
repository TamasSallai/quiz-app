import { useQuizContext } from '../../context'
import AnswerButton from '../AnswerButton/AnswerButton'
import './QuizBox.css'

const QuizBox = () => {
  const [{ quizList, quizIndex }, dispatch] = useQuizContext()
  const currentQuiz = quizList[quizIndex]

  const handleSelect = (answer: string) => {
    dispatch({ type: 'SELECT_ANSWER', payload: answer })
  }

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' })
  }

  const handlePrevQuestion = () => {
    dispatch({ type: 'PREV_QUESTION' })
  }

  return (
    <div className="quiz-container">
      <div className="question-container">
        <span className="question-number">
          Question <strong>{quizIndex + 1}</strong> of {quizList.length}
        </span>
        <p className="question-text">{currentQuiz.question}</p>
      </div>

      <div className="answer-button-grid">
        {currentQuiz.shuffled_answers.map((answer) => (
          <AnswerButton
            key={answer}
            answerText={answer}
            correctAnswer={currentQuiz.correct_answer}
            currentAnswer={currentQuiz.choosen_answer}
            onClick={() => handleSelect(answer)}
          />
        ))}
      </div>

      <div className="button-container">
        <button
          className="btn-primary"
          onClick={handlePrevQuestion}
          disabled={quizIndex === 0}
        >
          Previous
        </button>
        <button className="btn-primary" onClick={handleNextQuestion}>
          Next
        </button>
      </div>
    </div>
  )
}

export default QuizBox
