import styles from './styles.module.scss'

const Button = ({title, kind, onClick}) => {
  const generationClassByKind = () => {
    if(kind === 'secundary'){
      return styles.secundary
    } return styles.primary
  } 

  return ( 
    <button className={`${styles.button} ${generationClassByKind()}`} onClick={() => onClick()}>{title}</button>
   );
}
 
export default Button;