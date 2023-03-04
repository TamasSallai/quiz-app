import { useEffect, useReducer } from 'react'
import { QuizData, QuizDataExtended } from '../type'
import { shuffleArray } from '../helper'
import useFetch from './useFetch'

interface State {
  quizList: QuizDataExtended[]
  quizIndex: number
}

const initialState: State = {
  quizList: [],
  quizIndex: 0,
}

type Action =
  | { type: 'SET_QUIZLIST'; payload: QuizData[] }
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_QUIZLIST':
      const extendedQuizList = action.payload.map((quiz) => {
        const quizDataExtended = quiz as QuizDataExtended
        quizDataExtended.shuffled_answers = shuffleArray([
          ...quiz.incorrect_answers,
          quiz.correct_answer,
        ])
        quizDataExtended.choosen_answer = undefined
        return quizDataExtended
      })

      return {
        ...state,
        quizList: extendedQuizList,
      }
    case 'SELECT_ANSWER':
      const quizList = [...state.quizList]
      quizList[state.quizIndex].choosen_answer = action.payload

      return {
        ...state,
        quizList: quizList,
      }
    case 'NEXT_QUESTION':
      return {
        ...state,
        quizIndex:
          state.quizIndex < state.quizList.length - 1
            ? state.quizIndex + 1
            : state.quizIndex,
      }
    case 'PREV_QUESTION':
      return {
        ...state,
        quizIndex: state.quizIndex > 0 ? state.quizIndex - 1 : state.quizIndex,
      }
    default:
      return state
  }
}

const useQuiz = () => {
  const value = useReducer(reducer, initialState)
  const [quizState, dispatch] = value

  const { data, isLoading, error } = useFetch<QuizData[]>(
    'https://opentdb.com/api.php?amount=12',
    'results'
  )

  useEffect(() => {
    if (data) dispatch({ type: 'SET_QUIZLIST', payload: data })
  }, [data])

  return value
}

export default useQuiz
