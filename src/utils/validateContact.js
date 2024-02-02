export const validateContact = (contactInfo) => {
  const {
    userName,
    userEmail,
    enquiryType,
    subject,
    message } = contactInfo

  let errors = {};

  if (!userName || userName.trim() === '') errors.userNameError = `Please, let us know who you are.`
  if (!userEmail || userEmail.trim() === '') {
    errors.userEmailError = `How are we going to contact you?`
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)) {
    errors.userEmailError = `Please type a valid email.`
  }
  if (!subject || subject.trim() === '') errors.subjectError = `What do you want to talk about?`

  if (!message || message.trim() === '') errors.messageError = `Isn't there anything you want to say?`

  return errors;
};