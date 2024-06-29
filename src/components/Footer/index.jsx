import Image from 'next/image';
import styles from './styles.module.scss'
import Link from 'next/link';

import LogoFooter from '../../../public/logo2.jpeg'

import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube   } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.footerImg}>
        <Image src={LogoFooter} alt='Logo footer'/>

        <div className={styles.textFooter}>
          <p>+55 14 3227-5346</p>
          <p>contato@smartfacility.pro</p>
        </div>  
      </div>

      <div className={styles.reservade}>
        <p>&copy; {new Date().getFullYear()} SmartFacility. Todos os direitos reservados.</p>
      </div>

      <div className={styles.social}>
        <h2>Social</h2>
        <div className={styles.socialIcon}>
          <Link href='#'>
            <FaInstagram size={30}/>
          </Link>
          <Link href='#'>
            <FaWhatsapp size={30}/>
          </Link>
          <Link href='#'>
            <FaLinkedinIn size={30}/>
          </Link>
          <Link href='#'>
            <FaYoutube size={30}/>
          </Link>
        </div>
      </div>

    </div> 
  )

}

export default Footer