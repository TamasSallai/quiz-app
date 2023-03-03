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
  const [quizIndex, setQuizIndex] = useState(0)

  return (
    <div className="app">
      {data && (
        <QuizBox
          numberOfQuizzes={data.length}
          quizIndex={quizIndex}
          quiz={data[quizIndex]}
        />
      )}
      <button
        className="next-button"
        onClick={() =>
          setQuizIndex((index) =>
            data && data.length - 1 > index ? index + 1 : index
          )
        }
      >
        Next
      </button>
    </div>
  )
}

export default App
