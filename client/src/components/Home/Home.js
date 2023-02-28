import SearchBar from "../SearchBar/SearchBar";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import {getCountries,filterContinent ,filterActivity,orderName,orderPopulation,getActivities} from '../../redux/actions'
import Card from "../Card/Card";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";
import style from './Home.module.css'
const Home = () =>{
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities)
    const errorByQuery = useSelector((state) => state.error);
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(countries.length/ITEMS_PER_PAGE)
    const[currentPage,setCurrentPage] = useState(1)
    const [orden,setOrden] = useState('')
    const indexOfLastCountry = currentPage * ITEMS_PER_PAGE
    const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE
    const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry)
    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const next = ()=>{
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage)
    }
    const prev = ()=>{
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage)
    } 

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    }, [])

    const handleFilterContinent = (event)=>{
        setCurrentPage(1)
        dispatch(filterContinent(event.target.value))
    }

    const handleFilterActivity = (event)=>{
        setCurrentPage(1)
        dispatch(filterActivity(event.target.value))
    }
    const handleOrderName = (event)=>{
        dispatch(orderName(event.target.value))
        setCurrentPage(1)
        setOrden(event.target.value)
    }
    const handleOrderPopulation = (event)=>{
        dispatch(orderPopulation(event.target.value))
        setCurrentPage(1)
        setOrden(event.target.value)
    }
    
    return (
        <div >
            <SearchBar setPage={setCurrentPage}/>
            <div>
                <select className={style.filterAndOrder} onChange={e =>handleOrderName(e)}>
                    <option value="none" selected disabled hidden>Ordena por orden alfabetico</option>
                    <option value='ascAlf'>Ascendente</option>
                    <option value='descAlf'>Descendente</option>
                </select>

                <select className={style.filterAndOrder} onChange={e =>handleOrderPopulation(e)}>
                    <option value="none" selected disabled hidden>Ordena por orden de poblacion</option>
                    <option value='ascPop'>Ascendente</option>
                    <option value='descPop'>Descendente</option>
                </select>

                <select className={style.filterAndOrder} onChange={e =>handleFilterContinent(e) }>
                    <option value="none" selected disabled hidden>Filtra por Continente</option>    
                    <option value='All'>Todos</option>
                    <option value='North America'>North America</option>
                    <option value='Europe'>Europe</option>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='South America'>South America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Antarctica'>Antarctica</option>
                </select>

                <select className={style.filterAndOrder} onChange={e =>handleFilterActivity(e) }>
                <option value="none" selected disabled hidden>Filtra por actividades</option>
                <option value="All">Todas las actividades</option>
                {activities.length >0 && activities.map(act => <option vale={act.Nombre}>{act.Nombre}</option>)}
                </select>

            </div>
            <div>
                <Paginado totalPages={totalPages} paginado={paginado} next={next} prev={prev}  currentPage={currentPage}/>
            </div>
            <div className={style.cardsBox}>
            {
              errorByQuery === '' ?  currentCountries.map((country) => <Card key={country.id} id={country.id} name={country.Nombre} image={country.Imagen_de_la_bandera} continent={country.Continente}/>) :
              <h1>{errorByQuery}</h1>
            }
            </div>
            
        </div>
    )
}

export default Home;