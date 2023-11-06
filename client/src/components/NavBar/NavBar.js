import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.conteiner}>
      <ul className={style.lista}>
        <li className={style.elemento}>
          <button>
            <Link className={style.link} to="/form">
              Crea una nueva actividad
            </Link>
          </button>
        </li>
        <li className={style.elemento}>
          <button>
            <Link className={style.link} to="/home">
              Home
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
