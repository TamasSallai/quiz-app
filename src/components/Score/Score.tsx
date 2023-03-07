import { useQuizContext } from '../../context'
import './Score.css'

const Score = () => {
  const [{ numberOfAnswers, numberOfCorrectAnswers }, dispatch] =
    useQuizContext()
  const score = Math.round((100 * numberOfCorrectAnswers) / numberOfAnswers)

  let title = ''
  if (score === 100) {
    title = 'Perfect!'
  } else if (score > 90) {
    title = 'You did Great!'
  } else if (score > 70) {
    title = 'You did Good!'
  } else if (score > 60) {
    title = 'Not bad!'
  } else if (score > 50) {
    title = 'You will get it next time!'
  } else if (score < 50) {
    title = 'You could do better.'
  }

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' })
  }

  return (
    <div className="score-container">
      <div className="score-text-container">
        <p className="score-text">
          You gave {numberOfCorrectAnswers} correct answers out of{' '}
          {numberOfAnswers}
        </p>
        <h1 className="score-title">{title}</h1>
        <h2 className="score-percentage">Score: {score}%</h2>
      </div>
      <div className="button-container">
        <button className="btn-primary" onClick={handleRestartQuiz}>
          Restart Quiz
        </button>
        <button className="btn-primary">Start New Quiz</button>
      </div>
    </div>
  )
}

export default Score
