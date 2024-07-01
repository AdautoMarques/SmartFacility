'use client'

import Link from 'next/link';
import Button from '../Button';
import styles from './styles.module.scss'
import axios from 'axios';
import Input from '../Input';
import Textarea from '../Textarea';
import { useState } from 'react';



const Contato = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phone,setPhone] = useState()
  const [message, setMessage] = useState('')


  const sendEmail = () => {
    axios
      .post('/api/sendEmail', {messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${phone}, Messagem: ${message}`})
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
         <Input type='text' placeholder='Nome Completo' required onBlur={(e) => setNome(e.target.value)}/>
         <Input type="email" placeholder='E-mail profissional' required onBlur={(e) => setEmail(e.target.value)}/>
         <Input type="number" placeholder='Celular / Whatsapp' required onBlur={(e) => setPhone(e.target.value)}/>
         <Textarea placeholder='Mensagem' required onBlur={(e) => setMessage(e.target.value)}/>
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