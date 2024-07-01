import styles from './styles.module.scss'

const Input = ({type, placeholder, required, onBlur}) => {
  return ( 
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={styles.input}
      onBlur={onBlur}
    />
   );
}
 
export default Input;