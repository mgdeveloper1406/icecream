import LearnMore from '@organisms/LearnMore'
import Newsletter from '@organisms/Newsletter'
import RecipeCategories from '@organisms/RecipeCategories'
import SimpleTastyRecipes from '@organisms/SimpleTastyRecipes'
import TryOutRecipes from '@organisms/TryOutRecipes'
import InstagramSection from '@organisms/InstagramSection'
import RecipesData from '@api/RecipesData.json'
import instagramData from '@api/intagramData.js';

import './styles.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <RecipeCategories />
      <SimpleTastyRecipes recipes={RecipesData.slice(4, 12)} />
      <LearnMore />
      <InstagramSection posts={instagramData} />
      <TryOutRecipes recipes={RecipesData.slice(12, 20)} />
      <Newsletter />
    </div>
  )
}

export default Home