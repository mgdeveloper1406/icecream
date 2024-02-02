import { useRef } from 'react';

import './styles.scss'

/* To be able to use the Carousel, it is necessary to use forwardRef on the 
ItemComponent (component passed to Carousel as props) because the carousel
needs access to the item component width to scroll */

const Carousel = ({ 
  itemsArray, 
  ItemComponent, 
  arrowIcon,
  arrowBackground = 'transparent',
  arrowBackgroundSize = 'small',
  alwaysDisplayArrow = false,
  cardSize = null
}) => {
  const carousel = useRef();
  const firstItemRef = useRef()

  const items = itemsArray.map((item, index) => {
    /* There is no need to pass the ref to all elements, only one is 
    enough since the items are all the same size. That is why the if 
    check passes the ref only to first item */
    if (index === 0) {
      return (
        <ItemComponent
          ref={firstItemRef}
          key={item.id}
          cardSize={cardSize}
          {...item}
        />
      )
    } else {
      return (
        <ItemComponent
          key={item.id}
          cardSize={cardSize}
          {...item}
        />
    )
    }
  })

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= firstItemRef.current.offsetWidth
  };

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += firstItemRef.current.offsetWidth
  };

  return (
    <div className='carousel'>
      <button 
        className={`
          carousel__arrow${alwaysDisplayArrow ? '--alwaysDisplay' : ''}
          carousel__arrowBackground--${arrowBackground}
          carousel__arrowBackground--${arrowBackgroundSize}
          carousel__arrow--left
        `}
        aria-label='Scroll left'
        onClick={scrollLeft}
      >
        <img className='carousel__arrowIcon' src={arrowIcon} />
      </button>
      <ul className='carousel__items' ref={carousel}>
        {items}
      </ul>
      <button
        className={`
          carousel__arrow${alwaysDisplayArrow ? '--alwaysDisplay' : ''}
          carousel__arrowBackground--${arrowBackground}
          carousel__arrowBackground--${arrowBackgroundSize}
          carousel__arrow--right
        `}
        aria-label='Scroll right' 
        onClick={scrollRight}
      >
        <img  className='carousel__arrowIcon' src={arrowIcon} />
      </button>
    </div>
  )
}

export default Carousel