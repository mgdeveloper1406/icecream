import TimerIcon from '@atoms/Icons/Timer'
import ForkKnifeIcon from '@atoms/Icons/ForkKnife'

import './styles.scss'

const RecipeHeader = ({ data }) => {

  return (
    <div className='recipeHeader'>
      <h1 className='recipeHeader__title'>{data.title}</h1>
      <div className='recipeHeader__subHeader'>
        <div className='recipeHeader__authorColumn'>
          <img src={data.authorImage} alt={data.author} />
          <div className='recipeHeader__author'>
            <span className='recipeHeader__authorName'>{data.author}</span>
            <span className='recipeHeader__date'>{data.createdOn}</span>
          </div>
        </div>
        <div className='recipeHeader__prepTimeColumn'>
          <TimerIcon />
          <div className='recipeHeader__prepTime'>
            <span className='recipeHeader__prepTimeTitle'>Prep Time</span>
            <span className='recipeHeader__prepTimeValue'>{data.prepTime}</span>
          </div>
        </div>
        <div className='recipeHeader__foodTypeColumn'>
          <ForkKnifeIcon />
          <span className='recipeHeader__foodType'>{data.foodType[0]}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeHeader