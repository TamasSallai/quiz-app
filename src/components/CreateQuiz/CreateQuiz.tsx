import React, { useState } from 'react'
import { triviaCategories } from './trivia-categories'
import './CreateQuiz.css'

const CreateQuiz = () => {
  const [amount, setAmount] = useState<string>('5')
  const [categoryId, setCategoryId] = useState<string>()
  const [difficulty, setDifficulty] = useState<string>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amountParam = amount ? `amont=${amount}` : ''
    const categoryParam = categoryId ? `category=${categoryId}` : ''
    const difficultyParam = difficulty ? `difficulty=${difficulty}` : ''

    console.log(
      `https://opentdb.com/api.php?${amountParam}&${categoryParam}&${difficultyParam}&encode=base64`
    )
  }
  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      <h1 className="quiz-form-header">Create Quiz</h1>
      <div className="input-group">
        <label className="input-label">Number of questions</label>
        <input
          type="number"
          className="input"
          min="5"
          max="100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label className="input-label">Category</label>
        <select
          className="input"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          {triviaCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label className="input-label">Difficulty</label>
        <select
          className="input"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button type="submit" className="create-quiz-button">
        Create Quiz
      </button>
    </form>
  )
}

export default CreateQuiz
