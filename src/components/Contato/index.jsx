import styles from './styles.module.scss'
import { Fa500Px } from "react-icons/fa";


const Contato = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Fale conosco</span>
        <h1>SmartFacility</h1>
        <div>
          <p>📍  Rua Antônio Alves, n.°24-27, Bauru/SP</p>
          <p>☎️  +55 14 3227-5346</p>
          <p>📧  contato@smartfacility.pro</p>
        </div>
      </div>

      <div className={styles.form}>

      </div>
    </div>
   );
}
 
export default Contato;