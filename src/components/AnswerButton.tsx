import './AnswerButton.css'

interface AnswerButtonProps {
  text: string
}

const AnswerButton = ({ text }: AnswerButtonProps) => {
  return <button className="answer-button">{text}</button>
}

export default AnswerButton
