import { createContext, useContext, useEffect, useReducer } from 'react'
import useFetch from '../hooks/useFetch'
import { Action, reducer } from './reducer'
import { QuizData, QuizDataExtended } from '../type'

export interface State {
  quizList: QuizDataExtended[]
  quizIndex: number
  numberOfAnswers: number
  numberOfCorrectAnswers: number
}

const initialState: State = {
  quizList: [],
  quizIndex: 0,
  numberOfAnswers: 0,
  numberOfCorrectAnswers: 0,
}

const QuizContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
])

export const useQuizContext = () => useContext(QuizContext)

interface QuizProviderProps {
  children: React.ReactNode
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [value, dispatch] = useReducer(reducer, initialState)
  const { data, isLoading, error } = useFetch<QuizData[]>(
    'https://opentdb.com/api.php?amount=10',
    'results'
  )

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_QUIZ_LIST', payload: data })
    }
  }, [data])

  return (
    <QuizContext.Provider value={[value, dispatch]}>
      {!isLoading && children}
    </QuizContext.Provider>
  )
}
