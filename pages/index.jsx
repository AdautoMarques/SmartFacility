import Header from '@/src/components/Header'
import styles from './Home.module.scss'
import Welcome from '@/src/components/Welcome'
import Features from '@/src/components/Features'
import Management from '@/src/components/Management'
import Sobre from '@/src/components/Sobre'
import Contato from '@/src/components/Contato'

export default function Home(){
  return(
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
      <Management />
      <Sobre />
      <Contato />
    </div>
  )
}