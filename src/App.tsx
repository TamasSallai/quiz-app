import { useEffect, useState } from 'react'
import { useQuizContext } from './context'
import { QuizData } from './type'
import useFetch from './hooks/useFetch'
import QuizBox from './components/QuizBox/QuizBox'
import Score from './components/Score/Score'
import './App.css'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'

function App() {
  const { data, isLoading, error } = useFetch<QuizData[]>(
    'https://opentdb.com/api.php?amount=13',
    'results'
  )
  const [{ quizList, isFinished }, dispatch] = useQuizContext()

  return (
    <div className="app">
      {/* <CreateQuiz /> */}
      {isFinished ? (
        <Score />
      ) : quizList.length > 0 ? (
        <QuizBox />
      ) : (
        <CreateQuiz />
      )}
    </div>
  )
}

export default App
