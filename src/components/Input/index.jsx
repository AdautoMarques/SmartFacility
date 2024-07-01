import styles from './styles.module.scss'

const Input = ({type, placeholder, required, onBlur, name, id, onChange, pattern, value}) => {
  return ( 
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={styles.input}
      onBlur={onBlur}
      name={name}
      id={id}
      onChange={onChange}
      pattern={pattern}
      value={value}
    />
   ); 
}
 
export default Input;