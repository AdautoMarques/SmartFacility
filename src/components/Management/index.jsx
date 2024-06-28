import Image from 'next/image';
import styles from './styles.module.scss';
import ImageManagement from '../../../public/fm.jpg';
import coletaImg from '../../../public/coleta.webp';
import segmenImg from '../../../public/segmentacao.webp';
import previsaoImg from '../../../public/previsao.webp';
import otimizacaoImg from '../../../public/otimizacao.webp';

const Management = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.principal}>Gerenciamento de Instalações</h1>
      <p className={styles.pprincipal}>Simplificando a gestão técnica de condomínios com soluções inteligentes,
        a Smart Facility é o parceiro ideal para uma vida sem preocupações.
      </p>
      <div className={styles.image}>
        <Image src={ImageManagement} alt='imagem de gerenciamento de rede' />
      </div>
      <div className={styles.managements}>
        <div className={styles.management}>
          <div className={styles.img}>
            <Image src={coletaImg} alt='coleta de dados' />
          </div>
          <h1>Coleta de Dados</h1>
          <p>Modelagem com inserção de dados da construção do modelo BIM baseado nas informações geométricas</p>
        </div>
        <div className={styles.management}>
          <div className={styles.img}>
            <Image src={segmenImg} alt='segmentacao' />
          </div>
          <h1>Segmentação</h1>
          <p>Desenvolvimento da parametrização de todos os elementos do empreendimento que serão gerenciados pela operação</p>
        </div>
        <div className={styles.management}>
          <div className={styles.img}>
            <Image src={previsaoImg} alt='previsão' />
          </div>
          <h1>Previsão</h1>
          <p>Geração de Ordens de Serviços com automatização da Manutenção Preventiva podendo antecipar as 
            necessidades orçamentárias, priorização das Ordens de Serviço
          </p>
        </div>
        <div className={styles.management}>
          <div className={styles.img}>
            <Image src={otimizacaoImg} alt='otimização' />
          </div>
          <h1>Otimização</h1>
          <p>Gerenciamento de ativos com integração da manutenção de ativos,
            centralização das solicitações de serviços e automatização dos processos de Gestão
          </p>
        </div>
      </div>
    </div>
  );
}

export default Management;