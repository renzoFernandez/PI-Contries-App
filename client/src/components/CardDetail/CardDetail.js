import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountry,cleanCountry } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import style from './CardDetail.module.css'
const CardDetail = ()=>{
    const dispatch = useDispatch();
    const country = useSelector(state => state.country )
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getCountry(id))
        return () => dispatch(cleanCountry())
    },[])
    
    return(
        <div className={style.container}>
            <h1>{country.Nombre} {country.id}</h1>
            <div className={style.subContainer}>
                <img className={style.imagen} src={country.Imagen_de_la_bandera} alt={country.Nombre} />
                <div className={style.data}>
                    <h5>Continente:{country.Continente}</h5>
                    <h5>Capital:{country?.Capital}</h5>
                    <h5>Subregion:{country?.Subregion}</h5>
                    <h5>Area:{country?.Area} km²</h5>
                    <h5>Poblacion:{country.Poblacion}</h5> 
                </div>
                    
            </div>
            
        </div>
    )
}
export default CardDetail