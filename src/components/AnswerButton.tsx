import './AnswerButton.css'

interface AnswerButtonProps {
  answerText: string
  correctAnswer: string
  currentAnswer: string | undefined
  onClick: () => void
}

const AnswerButton = ({
  answerText,
  correctAnswer,
  currentAnswer,
  onClick,
}: AnswerButtonProps) => {
  let isCorrect = ''
  if (currentAnswer && answerText === correctAnswer) {
    isCorrect = 'correct'
  } else if (currentAnswer === answerText && answerText !== correctAnswer) {
    isCorrect = 'incorrect'
  }

  return (
    <button
      className={`answer-button ${isCorrect}`}
      onClick={onClick}
      disabled={currentAnswer !== undefined}
    >
      {answerText}
    </button>
  )
}

export default AnswerButton
