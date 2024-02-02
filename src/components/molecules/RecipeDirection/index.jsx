import { useState } from 'react'
import Checkbox from '@molecules/Checkbox'

import './styles.scss'

const RecipeDirection = ({ directionData }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev)
  };

  return (
    <li className='recipeDirection'>
      <label className='recipeDirection__label'>
        <Checkbox isChecked={isChecked} handleChange={handleCheckboxChange} />
        <span className='recipeDirection__labelContent'>
          <h3 className={`recipeDirection__labelTitle ${
            isChecked ? 'recipeDirection__labelTitle--checked' : ''
          }`}>
            {directionData.title}
          </h3>
          <p className={`recipeDirection__labelParagraph ${
            isChecked ? 'recipeDirection__labelParagraph--checked' : ''
          }`}>
            {directionData.description}
          </p>
          {directionData.image && 
            <img
              className='recipeDirection__labelImage'
              src={directionData.image}
              alt={directionData.imageAlt}
            />
          }
        </span>
      </label>
    </li>
  )
}

export default RecipeDirection
