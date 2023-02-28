import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing = ()=>{
    return (
        <div className={style.landingPage}>
            <button className={style.button}>
                <Link className={style.link} to='/home'>Descubra todos los paises del MUNDO!</Link>
            </button>
        </div>
    )
}
export default Landing;