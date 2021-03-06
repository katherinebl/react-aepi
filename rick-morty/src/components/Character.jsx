
import classes from './Character.module.css';

function Character({ name, image, species, status }) {
  return (
    <div className={classes.wrapper}>
      <h2>{name}</h2>
      <img src={image} alt={name}/>
      <p>Especie: {species}</p>
      <p>Estado: {status}</p>
    </div>
  )
}

export default Character;