import React, { createContext, useState } from 'react'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [toastProps, setToastProps] = useState()

  const openToast = (props) => {
    setIsOpen(true)
    setToastProps(props)
  }

  const closeToast = () => {
    setIsOpen(false)
    setToastProps(undefined)
  }

  return (
    <ToastContext.Provider
      value={{
        isOpen,
        openToast,
        closeToast,
        toastProps
      }}
    > 
      {children}
    </ToastContext.Provider>
  )
}