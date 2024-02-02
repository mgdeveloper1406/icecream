import { useRef } from 'react'
import SearchIcon from '/icons/searchIcon.svg'

import './styles.scss'

const TitleAndSearch = ({ filterData, title, searchFor }) => {

  const inputRef = useRef()

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') handleOnClick()
  }

  const handleOnClick = () => {
    filterData(inputRef.current.value)
  }

  return (
    <div className='titleAndSearch'>
      <h1 className='titleAndSearch__title'>{title}</h1>
      <p className='titleAndSearch__text'> Whether you're looking for quick and easy meals or creative culinary adventures, our BLW recipe search is your gateway to nutritious eating and joyful mealtimes.</p>
      <div className='titleAndSearch__search'>
        <input
          className='titleAndSearch__input'
          type='search'
          placeholder={`Search for ${searchFor}`}
          onKeyPress={handleOnKeyPress}
          ref={inputRef}
        >
        </input>
        <button className='titleAndSearch__button--mobile' onClick={handleOnClick} aria-label='Search'>
          <img className='titleAndSearch__buttonIcon' src={SearchIcon} />
        </button>
        <button className='titleAndSearch__button--desktop' onClick={handleOnClick} aria-label='Search'>Search</button>
      </div>
    </div>
  )
}

export default TitleAndSearch