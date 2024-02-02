import { Link } from 'react-router-dom'
import './styles.scss'

const TastyRecipes = ({ data }) => {
  return (
    <section className='tastyRecipes'>
      <h1 className='tastyRecipes__title'>
        Tasty Recipes
      </h1>
      <ul className='tastyRecipes__list'>
        {data.map((tastyRecipe) => {
          return (
            <li key={tastyRecipe.id} className='tastyRecipes__listItem'>
              <Link
                to={`/recipe/${tastyRecipe.id}`} 
                className='tastyRecipes__link'
                state={tastyRecipe}
              >
              <img src={tastyRecipe.image} alt={tastyRecipe.title} className="tastyRecipes__image" />
              <div className='tastyRecipes__authorContainer'>
                <h3 className='tastyRecipes__authorTitle'>
                  {tastyRecipe.title}
                </h3>
                <p className='tastyRecipes__author'>
                  By {tastyRecipe.author}
                </p>
              </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TastyRecipes
