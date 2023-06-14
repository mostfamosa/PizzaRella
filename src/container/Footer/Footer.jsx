import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants/'

function Footer() {
  return (
    <div className='app__footer section__padding'>

      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>

        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Deir al Asad, North District, Israel</p>
          <p className='p__opensans'>+972 502-8048-02</p>
          <p className='p__opensans'>+972 502-5107-22</p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.pizzarella} alt='logo-footer' />
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
          <div className='app__footer-links_icons'>
            <a href='https://www.facebook.com/shadi.aljamel'><FiFacebook /></a>
            <a href='https://www.instagram.com/pizza_rilla/'><FiInstagram /></a>
          </div>
        </div>

        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Everyday: </p>
          <p className='p__opensans'>17:00 pm -12:00 am</p>
        </div>

      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Alpha Team. All Rights reserved.</p>
      </div>

    </div>
  );

}
export default Footer;
