import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.scss'

const RecipeCategoryCard = ({ categoryName, cardColor, icon}, ref) => {
  const navigate = useNavigate()

  const goToRecipesPage = () => {
    navigate('/recipes', { state: categoryName })
  }

  return (
    <li ref={ref} className='recipeCategoryCard__container'>
      <button 
        className={`recipeCategoryCard recipeCategoryCard--${cardColor}`}
        onClick={goToRecipesPage}
        aria-label={`Select ${categoryName} category`}
      >
        <img className='recipeCategoryCard__img' src={icon} />
        <h3 className='recipeCategoryCard__title'>{categoryName}</h3>
      </button>
    </li>
  )
}

export default forwardRef(RecipeCategoryCard)