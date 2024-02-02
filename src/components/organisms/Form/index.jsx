import React, { useContext } from 'react'
import useForm from '@hooks/useForm'
import { ToastContext } from '@contexts/ToastContext'
import Toast from '@organisms/Toast'
import { validateContact } from '@utils/validateContact'
import toastStatus from '@organisms/Toast'
import Input from '@molecules/Input'
import Select from '@molecules/Select'
import Textarea from '@molecules/Textarea'
import Chef from '/imgs/chef.png'
import './styles.scss'

const Form = () => {
  const { isOpen, closeToast, toastProps, openToast } = useContext(ToastContext)

  const submit = () => {
    openToast({
      text: `Thank you, ${contactInfo.userName}! We've received your 
        message and will get back to you within 24 hours.`,
      status: toastStatus.success
    })
  }

  const {
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  } = useForm(submit, validateContact)

  return (
    <section className='contactUs'>
      <h1 className='contactUs__title'>Contact us</h1>
      <div className='contactUs__content'>
        <img className='contactUs__img' src={Chef} alt='Chef giving thumbs up'></img>
        <form className='contactUs__form' onSubmit={handleSubmit} name='contactForm'>
          <div className='contactUs__inputContainer'>
            <Input
              labelText='Name'
              id='username'
              showLabel
              type='text'
              placeholder='Enter your name...'
              name='userName'
              value={contactInfo.userName}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.userNameError}
            />
            {
              contactInfoErrors.userNameError
              && <span className='contactUs__formValidation'>{contactInfoErrors.userNameError}</span>
            }
          </div>
          <div className='contactUs__inputContainer'>
            <Input
              labelText='Email address'
              id='email'
              showLabel
              type='text'
              placeholder='Your email address...'
              name='userEmail'
              value={contactInfo.userEmail}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.userEmailError}
            />
            {
              contactInfoErrors.userEmailError
              && <span className='contactUs__formValidation'>{contactInfoErrors.userEmailError}</span>
            }
          </div>
          <div className='contactUs__selectContainer'>
            <Select
              labelText='Enquiry Type'
              id='enquiry'
              showLabel
              name='enquiryType'
              value={contactInfo.enquiryType}
              handleOnChange={handleChange}
              selectOptions={['Advertising', 'New Recipes', 'New Article', 'Partnership']}
            />
          </div>
          <div className='contactUs__inputContainer'>
            <Input
              labelText='Subject'
              id='subject'
              showLabel
              type='text'
              placeholder='Enter subject...'
              name='subject'
              value={contactInfo.subject}
              handleOnChange={handleChange}
              inputError={contactInfoErrors.subjectError}
            />
            {
              contactInfoErrors.subjectError
              && <span className='contactUs__formValidation'>{contactInfoErrors.subjectError}</span>
            }
          </div>
          <div className='grid-col-span-2 contactUs__textareaContainer'>
            <Textarea
              labelText='Messages'
              id='messages'
              showLabel
              name='message'
              value={contactInfo.message}
              placeholder='Enter your messages...'
              handleOnChange={handleChange}
              textareaError={contactInfoErrors.messageError}
            />
            {
              contactInfoErrors.messageError
              && <span className='contactUs__formValidation'>{contactInfoErrors.messageError}</span>
            }
          </div>
          <button className='contactUs__formButton' type='submit'>Submit</button>
        </form>
      </div>
      {isOpen && <Toast handleClose={closeToast} {...toastProps} />}
    </section>
  )
}

export default Form