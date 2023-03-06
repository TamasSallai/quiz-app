import { useQuizContext } from './context'
import QuizBox from './components/QuizBox/QuizBox'
import './App.css'

function App() {
  const [{ quizList, quizIndex }, dispatch] = useQuizContext()
  const currentQuiz = quizList[quizIndex]

  return <div className="app">{currentQuiz && <QuizBox />}</div>
}

export default App
