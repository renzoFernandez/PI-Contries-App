import { GET_COUNTRIES ,GET_COUNTRY,CLEAN_COUNTRY,GET_COUNTRIES_QUERY,FILTER_CONTINENT,FILTER_ACTIVITY,ORDER_NAME,ORDER_POPULATION,ERROR,GET_ACTIVITIES,GET_COUNTRIES_ALL} from "./action-types";

const initialState = {
    allCountries: [],
    countries:[],
    country:{},
    error:'',
    activities:[]
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES_ALL :
            return {
                ...state,
                allCountries : action.payload,
                countries : action.payload,
                error : ''
            }

        
        case GET_COUNTRY :
            return{
                ...state,
                country : action.payload
            }
        case CLEAN_COUNTRY:
            return{
                ...state,
                country:{}
            }
        case GET_COUNTRIES_QUERY:
            return{
                ...state,
                countries : action.payload,
                error : ''
            }

        case FILTER_CONTINENT:
            const allCountries = state.allCountries
            const continentFilter = action.payload === 'All' ? allCountries : allCountries.filter(country => country.Continente === action.payload)
            return{
                ...state, 
                countries:continentFilter
            }
        case FILTER_ACTIVITY:
            
            const ActivitisFilter = action.payload === 'All' ? state.allCountries : state.allCountries.filter(country => country.Activities.some(activity => activity.Nombre === action.payload) === true)
            return{
                ...state, 
                countries:ActivitisFilter
            }
        case ORDER_NAME:
            const orderName = action.payload === 'ascAlf' ? 
            state.countries.sort((a,b)=> {
                if(a.Nombre > b.Nombre){
                    return 1;
                }
                if(b.Nombre > a.Nombre){
                    return -1;
                }
                return 0
            }) :
            state.countries.sort((a,b)=> {
                if(a.Nombre > b.Nombre){
                    return -1;
                }
                if(b.Nombre > a.Nombre){
                    return 1;
                }
                return 0
            }) 
            return{
                ...state,
                countries:orderName
            }
        case ORDER_POPULATION:
            const orderPopulation = action.payload === 'ascPop' ? 
            state.countries.sort((a,b)=> {
                if(a.Poblacion > b.Poblacion){
                    return 1;
                }
                if(b.Poblacion > a.Poblacion){
                    return -1;
                }
                return 0
            }) :
            state.countries.sort((a,b)=> {
                if(a.Poblacion > b.Poblacion){
                    return -1;
                }
                if(b.Poblacion > a.Poblacion){
                    return 1;
                }
                return 0
            }) 
            return{
                ...state,
                countries:orderPopulation
            }
        case ERROR:
            return{
                ...state,
                countries : [],
                error:action.payload
            }
        case GET_ACTIVITIES:{
            return{
                ...state,
                activities:action.payload
            }
        }
        default:
            return {...state}
    }
}


export default reducer;