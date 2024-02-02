import { useState } from 'react'

import './styles.scss'

const Checkbox = ({ isChecked, handleChange }) => {

  return (
    <>
      <input 
        className='checkbox__input'
        type='checkbox'
        onChange={handleChange}
      />
      <svg
        className={`checkbox 
        ${isChecked ? 'checkbox--active' : ''}`}
        // This element is decorative so we hide it for screen readers
        aria-hidden='true'
        viewBox='0 0 12 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path 
          d='M1 3L5 7L11 1' 
          stroke={isChecked ? 'white' : 'none'} 
          strokeWidth='2' 
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  )
}

export default Checkbox