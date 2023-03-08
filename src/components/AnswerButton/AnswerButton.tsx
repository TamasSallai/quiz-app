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

  const text = { __html: answerText }

  return (
    <button
      className={`answer-button ${isCorrect}`}
      onClick={onClick}
      disabled={currentAnswer !== undefined}
      dangerouslySetInnerHTML={text}
    ></button>
  )
}

export default AnswerButton
