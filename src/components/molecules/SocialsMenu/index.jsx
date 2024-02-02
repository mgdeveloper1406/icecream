import { Link } from 'react-router-dom'
import fbLogo from '/icons/facebook.svg'
import twitterLogo from '/icons/twitter-small.svg'
import instagramLogo from '/icons/instagram.svg'
import './styles.scss'

const SocialsMenu = ({socialListDisabled = false}) => {
  return (
    <ul className={`socialList${socialListDisabled ? '--disabled' : ''}`}>
      <li className='socialList__item'>
        <Link
          to='/facebook'
          className='socialList__link'
        >
          <img src={fbLogo} alt="facebook logo" />
        </Link>
      </li>
      <li>
        <Link
          to='/twitter'
          className='socialList__link'
        >
          <img src={twitterLogo} alt="twitter logo" />
        </Link>
      </li>
      <li>
        <Link
          to='/instagram'
          className='socialList__link'
        >
          <img src={instagramLogo} alt="instagram logo" />
        </Link>
      </li>
    </ul>
  )
}

export default SocialsMenu;