import Image from 'next/image';
import styles from './styles.module.scss'
import sobreImg from '../../../public/sobre.webp'

const Sobre = () => {
  return ( 
    <div className={styles.container} id='sobre'>
      <div className={styles.text}>
        <h1>SOBRE A EMPRESA</h1>
        <h3>A PRONTO ENG! é uma empresa especializada e inovadora que nasceu como um marco revolucionário no setor, 
          fundada em 03 de fevereiro de 2020. Nasceu da união de profissionais visionários com soluções disruptivas e 
          impulsionados pela vasta experiência em consonância com soluções tecnológicas.
        </h3>
        <p>
          Ao seguir esta visão, a empresa inova constantemente, trazendo novos produtos e serviços que agregam 
          valores significativos e impulsionam a revolução e o progresso no setor. 
          A empresa adota as práticas de gestão estratégica com controle de variabilidade de processos e 
          eliminação de desperdícios garantindo a qualidade, produtividade e o melhor 
          custo-benefício com Lean Six Sigma: BIM
        </p>
      </div>
      <div className={styles.sobreImage}>
        <Image src={sobreImg} alt='Image Empresa' />
      </div>
    </div>
   );
}
 
export default Sobre;