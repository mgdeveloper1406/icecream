import RecipeHeader from '@organisms/RecipeHeader'
import RecipeNutrition from '@organisms/RecipeNutrition'

import './styles.scss'

const RecipeMainContent = ({ recipeData }) => {
  return (
    <section className='recipeMainContent'>
      <RecipeHeader data={recipeData} />
      <div className='recipeMainContent__foodInfo'>
        <img className='recipeMainContent__image' src={recipeData.image} alt={recipeData.title} />
        <div className='recipeMainContent__nutritionInfo'>
          <RecipeNutrition data={recipeData.nutritionInfo}/>
        </div>
        <p className='recipeMainContent__description'>Explore our Anti-Inflammatory Recipes – a collection of delicious dishes designed to fuel your well-being.</p>
      </div>
    </section>
  )
}

export default RecipeMainContent