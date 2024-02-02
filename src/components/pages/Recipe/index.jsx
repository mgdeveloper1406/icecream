import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import RecipesData from '@api/RecipesData.json'
import TastyRecipes from '@organisms/TastyRecipes'
import RecipeMainContent from '@organisms/RecipeMainContent'
import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'
import Newsletter from '@organisms/Newsletter'
import CheckoutRecipes from '@organisms/CheckoutRecipes'
import NotFound from '@molecules/NotFound'
import RecipeIngredients from '@organisms/RecipeIngredients'
import RecipeDirections from '@organisms/RecipeDirections'

import './styles.scss'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const [notFound, setNotFound] = useState(false)

  const { state } = useLocation()
  const { recipeId } = useParams()

  useEffect(() => {
    if (!state) {
      const recipe = RecipesData.filter((recipe) => {
        return (recipe.id === recipeId)
      })
  
      if (recipe.length > 0) {
        setRecipe(recipe[0])
      } else {
        setNotFound(true)
      }
    } else {
      setRecipe(state)
    }
  }, [recipeId])
  

  return (
    <div className="recipePage">
      {notFound && 
        <>
          <NotFound text='This recipe does not exist' />
          <Newsletter />
          <CheckoutRecipes />
        </>
      }
      {Object.keys(recipe).length > 0 &&
        <>
          <RecipeMainContent recipeData={recipe} />
          <div className='recipePage__columns'>
            <div className='recipePage__recipeContent'>
              <RecipeIngredients ingredientsData={recipe.ingredients}/>
              <RecipeDirections directionsData={recipe.directions} />
            </div>
            <aside className='recipePage__aside'>
              <TastyRecipes data={RecipesData.slice(20, 23)}/>
              <AdvertisingCard data={AdvertisingData} />
            </aside>
          </div>
          <Newsletter />
          <CheckoutRecipes />
        </>
      }
    </div>
  )
}

export default Recipe
