import './styles.scss'

const RecipeNutritionItem = ({ itemData }) => {

  return (
    <li className='recipeNutritionItem'>
      <span className='recipeNutritionItem__name'>{itemData[0].split(/(?=[A-Z])/).join(" ")}</span>
      <span className='recipeNutritionItem__value'>{itemData[1]}</span>
    </li>
  )
}

export default RecipeNutritionItem