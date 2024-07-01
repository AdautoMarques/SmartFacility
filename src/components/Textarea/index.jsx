import styles from './styles.module.scss'

const Textarea = ({placeholder, required, onBlur}) => {
  return ( 
    <textarea placeholder={placeholder} required={required} className={styles.textarea} onBlur={onBlur}/>
   );
}
 
export default Textarea;
