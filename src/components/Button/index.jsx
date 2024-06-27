import styles from './styles.module.scss'

const Button = ({title, kind}) => {
  const generationClassByKind = () => {
    if(kind === 'secundary'){
      return styles.secundary
    } return styles.primary
  } 

  return ( 
    <button className={`${styles.button} ${generationClassByKind()}`}>{title}</button>
   );
}
 
export default Button;