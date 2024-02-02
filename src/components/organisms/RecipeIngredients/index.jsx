import RecipeIngredient from '@molecules/RecipeIngredient'

import './styles.scss'

const RecipeIngredients = ({ ingredientsData }) => {
  const recipeMainIngredients = Object.entries(ingredientsData.main).map((ingredient) => {
    return (
      <RecipeIngredient key={ingredient[0]} text={ingredient[1]}/>
    )
  })

  const recipeSauceIngredients = Object.entries(ingredientsData.sauce).map((ingredient) => {
    return (
      <RecipeIngredient key={ingredient[0]} text={ingredient[1]}/>
    )
  })

  return (
    <section className='recipeIngredients'>
      <h2 className='recipeIngredients__title'>Ingredients</h2>
      <h3 className='recipeIngredients__subtitle'>For main dish</h3>
      <ul className='recipeIngredients__main'>
        {recipeMainIngredients}
      </ul>
      
    </section>
  )
}

export default RecipeIngredients