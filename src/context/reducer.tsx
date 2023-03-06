import { State } from './state'
import { QuizData, QuizDataExtended } from '../type'
import { shuffleArray } from '../helper'

export type Action =
  | { type: 'SET_QUIZ_LIST'; payload: QuizData[] }
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_QUIZ_LIST':
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
      const currentQuiz = quizList[state.quizIndex]
      currentQuiz.choosen_answer = action.payload

      return {
        ...state,
        quizList: quizList,
        numberOfAnswers: state.numberOfAnswers + 1,
        numberOfCorrectAnswers:
          currentQuiz.choosen_answer === currentQuiz.correct_answer
            ? state.numberOfCorrectAnswers + 1
            : state.numberOfCorrectAnswers,
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
