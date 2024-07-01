import styles from './styles.module.scss'

const Button = ({title, kind, onClick, type}) => {
  const generationClassByKind = () => {
    if(kind === 'secundary'){
      return styles.secundary
    } return styles.primary
  } 

  return ( 
    <button className={`${styles.button} ${generationClassByKind()}`} onClick={onClick} type={type}>{title}</button>
   );
}
 
export default Button;