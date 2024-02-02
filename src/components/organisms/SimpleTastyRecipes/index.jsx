import AdvertisingCard from '@molecules/Cards/Advertising'
import AdvertisingData from '@api/AdvertisingData'
import RecipeCard from '@molecules/Cards/Recipe'

import './styles.scss'

const SimpleTastyRecipes = ({ recipes }) => {
  const simpleTastyRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        {...recipe}
        cardSize='large'
        background='lightBlue'
      />
    )
  })
  return (
    <section className='simpleTastyRecipes__container'>
      <div className='simpleTastyRecipes__header'>
        <h2 className='simpleTastyRecipes__title'>Discover a world of nutritious and delicious recipes tailored for your little one's journey through Baby-Led Weaning</h2>
        <p className='simpleTastyRecipes__text'>From first tastes to exciting flavor combinations, explore a variety of BLW recipes designed to support your baby's developmental milestones and foster a love for wholesome foods.</p>
      </div>
      <div className='simpleTastyRecipes'>
        {simpleTastyRecipes}
        <aside className='simpleTastyRecipes__advertising'>
          <AdvertisingCard data={AdvertisingData} noMargin />
        </aside>
      </div>
    </section>
  )
}

export default SimpleTastyRecipes