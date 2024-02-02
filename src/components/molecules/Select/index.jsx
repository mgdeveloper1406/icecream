import './styles.scss'

const Select = ({
  labelText,
  id,
  showLabel,
  name,
  value,
  handleOnChange,
  selectOptions
}) => {

  const options = selectOptions.map(option => <option key={option} value={option}>{option}</option>)

  return (
    <div className='defaultSelect__container'>
      <label htmlFor={id} className={`defaultSelect__label${showLabel ? '' : '--visuallyHidden'}`}>{labelText}</label>
      <select
        className='defaultSelect'
        id={id}
        name={name}
        value={value}
        onChange={handleOnChange}
      >
        {options}
      </select>
    </div>
  )
}

export default Select