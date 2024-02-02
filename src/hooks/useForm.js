import { useEffect, useState, useContext } from 'react';

const useForm = (callback, validation) => {
  const initialContactInfo = {
    userName: ``,
    userEmail: ``,
    enquiryType: `Advertising`,
    subject: ``,
    message: ``
  }

  const [contactInfo, setContactInfo] = useState(initialContactInfo);

  const [contactInfoErrors, setContactInfoErrors] = useState({
    userNameError: ``,
    userEmailError: ``,
    subjectError: ``,
    messageError: ``
  });

  const [isSubmiting, setIsSubmiting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setContactInfoErrors(validation(contactInfo))
    setIsSubmiting(true)
  };

  useEffect(() => {
    if (Object.keys(contactInfoErrors).length === 0 && isSubmiting) {
      callback()
      setContactInfo(initialContactInfo)
    }
  }, [contactInfoErrors])

  return {
    contactInfo,
    contactInfoErrors,
    handleChange,
    handleSubmit
  };
};

export default useForm;