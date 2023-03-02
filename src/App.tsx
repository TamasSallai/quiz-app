import AnswerButton from './components/AnswerButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="quiz-container">
        <div className="question-container">
          <span className="question-number">Question 1 of 12</span>
          <p className="question-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et
            earum molestias cumque ex nobis voluptates dolor. Quod, eaque sint.
            Blanditiis ducimus quis doloribus dolores rerum expedita, voluptate
            soluta suscipit?
          </p>
        </div>

        <div className="answer-button-grid">
          <AnswerButton text="Hello World" />
          <AnswerButton text="Hello World" />
          <AnswerButton text="Hello World" />
          <AnswerButton text="Hello World" />
        </div>
      </div>
    </div>
  )
}

export default App
