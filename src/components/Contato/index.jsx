// Contato.js

'use client'

import * as Yup from 'yup';
import Link from 'next/link';
import axios from 'axios';
import { useFormik } from 'formik';

import Button from '../Button';
import styles from './styles.module.scss';
import Input from '../Input';
import Textarea from '../Textarea';
import Loading from '../Loading';
import { useState } from 'react';
import  SuccessModal from '../SuccessModal';
import  FailModal  from '../FailModal';

const Contato = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [failModal, setFailModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
      phone: Yup.string().matches(/^[0-9]{10,11}$/, 'Digite um telefone válido').required('Campo obrigatório'),
      message: Yup.string().required('Campo obrigatório')
    }),

    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values)  
  });

 

  const handleSubmitForm = (values) => {
    setIsLoading(true)
    axios
      .post('/api/sendEmail', { messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Mensagem: ${values.message}` })
      .then(() => {
        formik.resetForm()
        setIsLoading(false)
        setSuccessModal(true)
      })
      .catch(() => {
        setIsLoading(false)
        setFailModal(true)
      })
  }

  const closeModal = () => {
    setFailModal(false)
    setSuccessModal(false)
  }

  return (
    <>
    {successModal && <SuccessModal closeModal={closeModal}/>}
    {failModal && <FailModal closeModal={closeModal}/>}
    {isLoading && <Loading />}
    <div className={styles.container} id='contato'>
      <div className={styles.text}>
        <span>Fale conosco</span>
        <h1>SmartFacility</h1>
        <div>
          <p>📍 Rua Antônio Alves, n.°24-27, Bauru/SP</p>
          <p>☎️ +55 14 3227-5346</p>
          <p>📧 contato@smartfacility.pro</p>
        </div>
      </div>

      <div className={styles.form}>
        <h1>Fale com um especialista</h1>
        <form id='formulario' onSubmit={formik.handleSubmit}>
          <Input 
            type='text' 
            placeholder='Nome Completo' 
            required 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            name='name' 
            id='name'
            value={formik.values.name}
          />
          <Input 
            type="email" 
            placeholder='E-mail profissional' 
            required 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            name='email' 
            id='email'
            value={formik.values.email}
          />
          <Input 
            type="text" 
            placeholder='Celular / Whatsapp' 
            required 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            name='phone' 
            id='phone'
            value={formik.values.phone}
          />
          <Textarea 
            placeholder='Mensagem' 
            required 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            name='message' 
            id='message'
            value={formik.values.message}
          />
          <Button type='submit' title='Enviar' kind='secondary' />
        </form>
        <div className={styles.priv}>
          <p>
            Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href='#'>política de privacidade</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contato;
