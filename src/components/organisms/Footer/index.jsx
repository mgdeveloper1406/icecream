import logo from '/icons/logo.svg'
import { Link } from 'react-router-dom'
import SocialsMenu from '@molecules/SocialsMenu'

import './styles.scss'

function Footer() {

  return (
    <footer className='footer__container'>
      <div className='footer'>
        <div className='footer__header'>
          <div className='footer__headerInfo'>
            
            <p className='footer__text'>Thanks for use our app!</p>
          </div>
          
        </div>
        <hr className='footer__horizontalRule'></hr>
        
      </div>
    </footer>
  )
}


export default Footer;
