import SadIcon from '@atoms/Icons/Sad'

import './styles.scss'

const NotFound = ({ text }) => {

  return (
    <div className='notFound'>
      <SadIcon />
      <p className='notFound__text'>{text}</p>
    </div>
  )
}

export default NotFound