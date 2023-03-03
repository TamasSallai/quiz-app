import { useState } from 'react'
import useFetch from './hooks/useFetch'
import { Quiz } from './type'
import QuizBox from './components/QuizBox'

import './App.css'

function App() {
  const { data, isLoading, error } = useFetch<Quiz[]>(
    'https://opentdb.com/api.php?amount=12',
    'results'
  )
  const [quizIndex, setQuizIndex] = useState(1)

  return (
    <div className="app">
      {data && (
        <QuizBox
          numberOfQuizzes={data.length}
          quizIndex={quizIndex}
          quiz={data[quizIndex]}
        />
      )}
    </div>
  )
}

export default App
