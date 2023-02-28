import { useDispatch  } from "react-redux";
import {getCountryByQuery } from '../../redux/actions'
import style from './SearchBar.module.css'
const SearchBar = ({setPage})=>{
const dispatch = useDispatch()
const handlerQuery = (event) =>{
    setPage(1)
    dispatch(getCountryByQuery(event.target.value))
}
    return(
        <div className={style.conteiner}>
            <label>Inserte algun pais: </label>
            <input type='text' autoComplete="off" name='pais' onChange={handlerQuery} placeholder='Buscar...' ></input>
        </div>    
    )
}
export default SearchBar;  