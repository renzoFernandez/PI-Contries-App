import style from "./Activities.module.css";

const Activities = ({ act }) => {
  return (
    <div className={style.container}>
      <h3>Actividad</h3>
      <div className={style.subContainer}>
        <h5>Nombre:{act.Nombre}</h5>
        <h5>Duracion:{act.Duracion}</h5>
        <h5>Dificultad:{act.Dificultad}</h5>
        <h5>Temporada:{act.Temporada}</h5>
      </div>
    </div>
  );
};

export default Activities;
