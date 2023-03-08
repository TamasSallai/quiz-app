import { useQuizContext } from './context'
import QuizBox from './components/QuizBox/QuizBox'
import './App.css'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'

function App() {
  const [{ quizList, quizIndex }, dispatch] = useQuizContext()
  const currentQuiz = quizList[quizIndex]

  return <div className="app">{currentQuiz && <CreateQuiz />}</div>
}

export default App
