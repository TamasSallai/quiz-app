import React from 'react'
import './QuizBox.css'

interface QuizBoxProps {
  question: string
  quizIndex: number
  numberOfQuizzes: number
  children: React.ReactNode
}

const QuizBox = ({
  question,
  quizIndex,
  numberOfQuizzes,
  children,
}: QuizBoxProps) => {
  return (
    <div className="quiz-container">
      <div className="question-container">
        <span className="question-number">
          Question <strong>{quizIndex + 1}</strong> of {numberOfQuizzes}
        </span>
        <p className="question-text">{question}</p>
      </div>
      <div className="answer-button-grid">{children}</div>
    </div>
  )
}

export default QuizBox
