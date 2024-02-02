import './styles.scss'

const Textarea = ({
  labelText,
  id,
  showLabel,
  name,
  value,
  placeholder,
  handleOnChange,
  textareaError = false,
  required = false
}) => {

  return (
    <div className='defaultTextarea__container'>
      <label htmlFor={id} className={`defaultTextarea__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <textarea className={`defaultTextarea ${textareaError ? 'defaultTextarea--error' : ''}`}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
      >
      </textarea>
    </div>
  )
}

export default Textarea