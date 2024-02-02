import RecipeDirection from '@molecules/RecipeDirection'

import './styles.scss'

const RecipeDirections = ({ directionsData }) => {
  const recipeDirections = Object.entries(directionsData).map((direction) => {
    return (
      <RecipeDirection key={direction[0]} directionData={direction[1]}/>
    )
  })


  return (
    <section className='recipeDirections'>
      <h2 className='recipeDirections__title'>Directions</h2>
      <ul className='recipeDirections__list'>
        {recipeDirections}
      </ul>
    </section>
  )
}

export default RecipeDirections