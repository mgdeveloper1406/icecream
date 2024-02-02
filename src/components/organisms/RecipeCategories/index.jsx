import { useNavigate } from 'react-router-dom'
import RecipeCategoryCard from '@molecules/Cards/RecipeCategory'
import ArrowIcon from '/icons/arrowSmall.svg'
import CategoriesData from '@api/CategoriesData.js'
import Carousel from '../Carousel'

import './styles.scss'

const RecipeCategories = () => {
  const navigate = useNavigate()

  const goToRecipesPage = () => {
    navigate('/recipes')
  }

  return (
    <section className='recipeCategories'>
      <div className='recipeCategories__header'>
        <h2 className='recipeCategories__title'>Categories</h2>
        <button className='recipeCategories__filterButton' onClick={goToRecipesPage}>
          View All
        </button>
      </div>
      <Carousel
        itemsArray={CategoriesData}
        ItemComponent={RecipeCategoryCard}
        arrowIcon={ArrowIcon}
        arrowBackground='lightBlue'
      />
    </section>
  )
}

export default RecipeCategories