import { Link } from "react-router-dom";
import style from './Card.module.css'
const Card = ({id,name,image,continent}) =>{
    return(
        <div className={style.container}>
            <Link to={`/detail/${id}`}>
                <img className={style.imagen} src={image} alt={name}/>
            </Link>
            <h3>{name}</h3>
            <h5>{continent}</h5>
        </div>
        

    )
} 
export default Card;