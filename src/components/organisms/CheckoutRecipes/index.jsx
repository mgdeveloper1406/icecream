import ArrowIcon from '/icons/arrow.svg'
import Carousel from '@organisms/Carousel'
import RecipeCard from '@molecules/Cards/Recipe'
import RecipesData from '@api/RecipesData.json'

import './styles.scss'

const CheckoutRecipes = () => {
  return (
    <section className='checkoutRecipes'>
      <h2 className='checkoutRecipes__title'>Check out these delicious recipes</h2>
      <Carousel
        itemsArray={RecipesData.slice(0, 4)}
        ItemComponent={RecipeCard}
        arrowIcon={ArrowIcon}
        cardSize='small'
      />
    </section>
  );
};

export default CheckoutRecipes
