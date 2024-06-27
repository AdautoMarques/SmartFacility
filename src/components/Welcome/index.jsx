import Button from '../Button';
import styles from './styles.module.scss'


const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Simplifique a gestão técnica do seu condomínio com o <span>SmartFacility </span></h1>
        <p>Não espere até que os problemas técnicos no seu condomínio se torne um pesadelo incontrolável.
           Descubra agora como a Smart Facility pode eliminar suas dores de cabeça. 
           A solução que você precisa está a apenas um clique de distância. 
           Conheça nossas Soluções</p>

        <div className={styles.button}>
          <Button title='Conheça nossas Soluções' kind='secundary' />  
        </div>
      </div>
      
    </div>
  );
}

export default Welcome;