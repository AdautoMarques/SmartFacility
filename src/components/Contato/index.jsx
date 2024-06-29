import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss'



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
        <h1>Fale com um especialista</h1>

        <input type="text" placeholder='Nome completo' required />
        <input type="email" placeholder='E-mail profissional' required />
        <input type="number" placeholder='Celular / Whatsapp' required />
        <textarea placeholder='Mensagem' required />

        <Button title='Enviar' />

        <div className={styles.priv}>
          <p>
            Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href='#'>política de privacidade</Link> 
          </p>
        </div>
      </div>


    </div>
  );
}

export default Contato;