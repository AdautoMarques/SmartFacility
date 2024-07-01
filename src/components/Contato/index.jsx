'use client'

import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss'
import axios from 'axios';



const Contato = () => {

  const sendEmail = () => {
    axios
      .post('/api/sendEmail', {messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Messagem: ${messagem}`})
      .then(() => console.log('boa guerreiro'))
      .catch(() => console.log('vixii'))
  }

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
        <form>
          <input type="text" placeholder='Nome completo' required />
          <input type="email" placeholder='E-mail profissional' required />
          <input type="number" placeholder='Celular / Whatsapp' required />
          <textarea placeholder='Mensagem' required />

          <Button title='Enviar' kind='secundary' onClick={() => sendEmail()} />
        </form>
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