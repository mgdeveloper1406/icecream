import { useRef, useContext } from 'react'
import { ToastContext } from '@contexts/ToastContext'
import toastStatus from '@organisms/Toast'
import Toast from '@organisms/Toast'

import './styles.scss'

const Newsletter = () => {

  const inputRef = useRef()
  const { isOpen, closeToast, toastProps, openToast } = useContext(ToastContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    openToast({
      text: `Thank you, ${inputRef.current.value}! You are subscribed to our newsletter.`,
      status: toastStatus.success
    })
  }

  return (
    <div className={`newsletter-container`}>
      <div className={`newsletter`}>
        <form className={`newsletter__form`} onSubmit={handleSubmit}>
          <header className={`header-container`}>
            <h2 className={`newsletter__title`}>Deliciousness to your inbox</h2>
            <p className={`newsletter__paragraph`}>Join our newsletter community for a flavorful journey! Subscribe now to unlock exclusive recipes, wellness tips, and exciting updates delivered straight to your inbox.</p>
          </header>
          <div className={`input-container`}>
            <label htmlFor='newsletterEmail' className='newsletter__inputLabel--visuallyHidden'>Email</label>
            <input
              ref={inputRef}
              className={`newsletter__input`} 
              type='email' 
              placeholder='Your email adress...'
              name='userEmail'
            />
            <button className={`newsletter__button`} type='submit'>Subscribe</button>
          </div>
        </form>
      </div>
      {isOpen && <Toast handleClose={closeToast} {...toastProps} />}
    </div>
  )
}

export default Newsletter