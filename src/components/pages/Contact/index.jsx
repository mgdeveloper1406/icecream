import CheckoutRecipes from '@organisms/CheckoutRecipes'
import Newsletter from '@organisms/Newsletter'
import Form from '@organisms/Form'

import './styles.scss'

const Contact = () => {
  return (
    <div className='contactPage'>
      <Form />
      <Newsletter />
      <CheckoutRecipes />
    </div>
  );
};

export default Contact