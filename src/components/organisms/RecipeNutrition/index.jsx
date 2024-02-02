import RecipeNutritionItem from '@molecules/RecipeNutritionItem'

import './styles.scss'

const RecipeNutrition = ({ data }) => {
  const nutritionInfo = Object.entries(data).map((item) => {
    return (
      <RecipeNutritionItem key={item[0]} itemData={item} />
    )
  })

  return (
    <div className='recipeNutrition'>
      <div className='recipeNutrition__mainContent'>
        <h3 className='recipeNutrition__title'>Nutrition Information</h3>
        <ul className='recipeNutrition__items'>
          {nutritionInfo}
        </ul>
      </div>
      <p className='recipeNutrition__footer'>Discover a wide range of options to suit every taste and stage of your baby's development</p>
    </div>
  )
}

export default RecipeNutrition