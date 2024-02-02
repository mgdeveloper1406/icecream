import RecipeCard from '@molecules/Cards/Recipe'

import './styles.scss'

const TryOutRecipes = ({ recipes }) => {
  const tryOutRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard 
        key={recipe.id}
        {...recipe}
        cardSize='small'
      />
    )
  })
  return (
    <section className='tryOutRecipes__container'>
      <div className='tryOutRecipes__header'>
        <h2 className='tryOutRecipes__title'>Try this delicious recipe to make your day</h2>
        <p className='tryOutRecipes__text'>Join the journey to wellness through delightful bites!</p>
      </div>
      <div className='tryOutRecipes'>
        {tryOutRecipes}
      </div>
    </section>
  )
}

export default TryOutRecipes