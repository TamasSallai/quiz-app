import { createContext, useContext, useReducer } from 'react'
import { QuizDataExtended } from '../type'
import { Action, reducer } from './reducer'

export interface State {
  quizList: QuizDataExtended[]
  quizIndex: number
  numberOfAnswers: number
  numberOfCorrectAnswers: number
  isFinished: boolean
}

const initialState: State = {
  quizList: [],
  quizIndex: 0,
  numberOfAnswers: 0,
  numberOfCorrectAnswers: 0,
  isFinished: false,
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

  return (
    <QuizContext.Provider value={[value, dispatch]}>
      {children}
    </QuizContext.Provider>
  )
}
