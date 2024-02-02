import { useState } from 'react'
import Checkbox from '@molecules/Checkbox'

import './styles.scss'

const RecipeIngredient = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev)
  };

  return (
    <li className='recipeIngredient'>
      <label className='recipeIngredient__label'>
        <Checkbox isChecked={isChecked} handleChange={handleCheckboxChange} />
        <span className={`recipeIngredient__labelText ${
          isChecked ? 'recipeIngredient__labelText--checked' : ''
        }`}>
          {text}
        </span>
      </label>
    </li>
  )
}

export default RecipeIngredient
