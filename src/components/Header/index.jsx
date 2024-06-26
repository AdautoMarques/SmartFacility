import Image from 'next/image';
import styles from './styles.module.scss'
import Logo from '../../../public/logo.png'
import Link from 'next/link';



const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} />
      </div>

      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="#">Quem Somos</Link>
        <Link href="#">Contatos</Link>
        <Link href='#'>Login</Link>
      </div>

      <div className={styles.action}>
        <button className={styles.button}>Fale conosco</button>
      </div>
    </div>
  );
}

export default Header;