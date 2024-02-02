import React from 'react'
import ErrorIcon from '/icons/error.svg'
import SuccessIcon from '/icons/success.svg'
import CloseIcon from '/icons/close.svg'
import './styles.scss'

export const toastStatus = {
  success: 'SUCCESS',
  error: 'ERROR'
}

const Toast = ({ handleClose, text, status }) => {

  const icon = status === toastStatus.error ? ErrorIcon : SuccessIcon
  const color = status === toastStatus.error ? '#FC2D2D' : '#4ECB71'

  return (
    <div className='toast' style={{ border: `3px solid ${color}` }}>
      <div className='toast__content'>
        <img className='toast__icon' alt={status} src={icon}></img>
        <p className='toast__text'>{text}</p>
      </div>
      <button onClick={handleClose} className='toast__closeButton' aria-label='close'>
        <img className='toast__closeButtonImg' src={CloseIcon}></img>
      </button>
    </div>
  )
}

export default Toast