export interface QuizData {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuizDataExtended extends QuizData {
  choosen_answer: string | undefined
  shuffled_answers: string[]
}
