import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowWidth from '@hooks/usePageWidth'

import './styles.scss'

const NavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const windowWidth = useWindowWidth()
  
  const menuItems = [
    { name: 'Home', linkTo: '/' },
    { name: 'Recipes', linkTo: '/recipes' },
    
    
  ]

  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsMobileMenuOpen(false)
    }
  }, [windowWidth])

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }

  const handleMobileNavigationClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <button
        className={`mobileMenu__button ${isMobileMenuOpen ? 'mobileMenu__button--open' : 'mobileMenu__button--close'}`}
        onClick={handleMobileMenuClick}
      >
      </button>
      <div className={`navigationMenu__container ${isMobileMenuOpen ? 'mobileMenu--open' : 'mobileMenu--closed'}`}>
        <ul className='navigationMenu'>
          {menuItems.map((item) => {
            return (
              <li key={item.linkTo} className='navigationMenu__item' onClick={handleMobileNavigationClick}>
                <NavLink
                  to={item.linkTo} 
                  className={({ isActive }) =>
                    (isActive ? 'navigationMenu__link navigationMenu__link--active' : 'navigationMenu__link')
                  }>
                  {item.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default NavigationMenu
