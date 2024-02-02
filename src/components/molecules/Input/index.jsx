import './styles.scss'

const Input = ({ 
  labelText, 
  id,
  showLabel,
  type, 
  placeholder, 
  name, 
  value, 
  handleOnChange,
  inputError = false,
  required = false
}) => {

  return (
    <div className='defaultInput__container'>
      <label htmlFor={id} className={`defaultInput__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <input className={`defaultInput ${inputError ? 'defaultInput--error' : ''}`}
        id={id} 
        type={type}
        placeholder={placeholder} 
        name={name} 
        value={value} 
        onChange={handleOnChange} 
        required={required}
      />
    </div>
  )
}
 
export default Input