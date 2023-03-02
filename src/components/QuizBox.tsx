import { Quiz } from '../type'
import AnswerButton from './AnswerButton'
import './QuizBox.css'

interface QuizBoxProps {
  numberOfQuizzes: number
  quizIndex: number
  quiz: Quiz
}

const QuizBox = ({ numberOfQuizzes, quizIndex, quiz }: QuizBoxProps) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  } = quiz

  // Answers array randomization should be reworked with the Fisher-Yates shuffle algorithm.
  const answers = [...incorrect_answers, correct_answer]
  const shuffledAnswers = answers.sort(() => 0.5 - Math.random())

  return (
    <div className="quiz-container">
      <div className="question-container">
        <span className="question-number">
          Question {quizIndex} of {numberOfQuizzes}
        </span>
        <p className="question-text">{question}</p>
      </div>

      <div className="answer-button-grid">
        {shuffledAnswers.map((answer) => (
          <AnswerButton key={answer} text={answer} />
        ))}
      </div>
    </div>
  )
}

export default QuizBox
