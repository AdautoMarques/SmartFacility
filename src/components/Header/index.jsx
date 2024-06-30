import Image from 'next/image';
import styles from './styles.module.scss'
import Logo from '../../../public/logo.png'
import Link from 'next/link';
import Button from '../Button';



const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt='Logo'/>
      </div>

      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="#sobre">Quem Somos</Link>
        <Link href="#">Contatos</Link>
        <Link href='#'>Login</Link>
      </div>

      <div className={styles.action}>
        <Button title='Fale conosco' kind='primary' className={styles.btn}/>
      </div>
    </div>
  );
}

export default Header;