import { forwardRef } from 'react'
import './styles.scss'

const InstagramCard = ({ image }, ref) => {
  return (
    <li ref={ref} className='instagramCard'>
      <img src={image} className='instagramCard__image' />
    </li>
  );
};
export default forwardRef(InstagramCard)