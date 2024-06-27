import Header from '@/src/components/Header'
import styles from './Home.module.scss'
import Welcome from '@/src/components/Welcome'
import Features from '@/src/components/Features'

export default function Home(){
  return(
    <div className={styles.container}>
      <Header />
      <Welcome />
      <Features />
    </div>
  )
}