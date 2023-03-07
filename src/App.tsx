import { useEffect, useState } from 'react'
import { useQuizContext } from './context'
import { QuizData } from './type'
import useFetch from './hooks/useFetch'
import QuizBox from './components/QuizBox/QuizBox'
import Score from './components/Score/Score'
import './App.css'

function App() {
  const { data, isLoading, error } = useFetch<QuizData[]>(
    'https://opentdb.com/api.php?amount=13',
    'results'
  )
  const [{ quizList, isFinished }, dispatch] = useQuizContext()

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_QUIZ_LIST', payload: data })
    }
  }, [data])

  return (
    <div className="app">
      {isFinished ? <Score /> : quizList.length > 0 && <QuizBox />}
    </div>
  )
}

export default App
