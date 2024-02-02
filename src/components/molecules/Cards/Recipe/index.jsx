import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import LikeButton from '../../LikeButton'
import TimerIcon from '@atoms/Icons/Timer'
import ForkKnifeIcon from '@atoms/Icons/ForkKnife'

import './styles.scss'

const RecipeCard = (props, ref) => {
  const {
    id,
    image,
    title,
    prepTime,
    foodType,
    cardSize,
    background = 'default'
  } = props

  return (
      <li ref={ref} className={`recipeCard__container recipeCard__container--${cardSize} recipeCard__container--${background}`}>
        <Link 
          to={`/recipe/${id}`} 
          className='recipeCard__link'
          state={props}
        >
          <div className='recipeCard'>
            <img className='recipeCard__img' src={image} alt={title} />
            <LikeButton />
            <h3 className={`recipeCard__title recipeCard__title--${cardSize}`}>{title}</h3>
            <div className='recipeCard__tags'>
              <span className='recipeCard__tag1'>
                <TimerIcon />
                <span className='recipeCard__tagText'>{prepTime}</span>
              </span>
              <span className='recipeCard__tag2'>
                <ForkKnifeIcon />
                <span className='recipeCard__tagText'>{foodType[0]}</span>
              </span>
            </div>
          </div>
        </Link>
      </li>
  );
};

export default forwardRef(RecipeCard)