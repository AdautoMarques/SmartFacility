import styles from './styles.module.scss'

const Loading = () => {
  return ( 
    <div className={styles.overlay}>
      <div className={styles.loading}/>
    </div>
  );
}
 
export default Loading;