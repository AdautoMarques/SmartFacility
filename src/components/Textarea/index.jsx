import styles from './styles.module.scss'

const Textarea = ({placeholder, required, onBlur, name, id, onChange, value}) => {
  return ( 
    <textarea 
      placeholder={placeholder} 
      required={required} 
      className={styles.textarea} 
      onBlur={onBlur}
      name={name}
      id={id}
      onChange={onChange}  
      value={value}
    />
   );
}
 
export default Textarea;
