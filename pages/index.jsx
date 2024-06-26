import Header from '@/src/components/Header'
import styles from './Home.module.scss'

export default function Home(){
  return(
    <div className={styles.container}>
      <Header />
    </div>
  )
}