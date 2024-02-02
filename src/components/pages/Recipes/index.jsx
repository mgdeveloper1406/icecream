import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AllRecipes from '@organisms/AllRecipes'
import RecipesData from '@api/RecipesData.json'
import Newsletter from '@organisms/Newsletter'
import TitleAndSearch from '@organisms/TitleAndSearch'
import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'

import './styles.scss'

const Recipes = () => {
  const [recipes, setRecipes] = useState(RecipesData)
  const [filtered, setFiltered] = useState(false)

  const { state: filterTerm } = useLocation()
  
  const filterRecipes = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setRecipes(RecipesData)
      setFiltered(false)
    } else {
      const filteredRecipes = RecipesData.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.foodType.includes(searchTerm.toLowerCase())
      )
      setRecipes(filteredRecipes)
      setFiltered(true)
    }
  }

  useEffect(() => {
    if (filterTerm) {
      filterRecipes(filterTerm)
    }
  }, [filterTerm])

  return (
    <div className='recipesPage'>
      <TitleAndSearch
        filterData={filterRecipes}
        title='Recipes'
        searchFor='recipes'
      />
      <AllRecipes recipesData={recipes} filtered={filtered} />
      <AdvertisingCard data={AdvertisingData} />
      <Newsletter />
    </div>
  )
}

export default Recipes