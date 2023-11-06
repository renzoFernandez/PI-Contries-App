import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { validate } from "../../utils/validate";
import { orderName } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const [form, setForm] = useState({
    Nombre: "",
    Dificultad: 0,
    Duracion: 0,
    Temporada: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    Nombre: "",
    Dificultad: 0,
    Duracion: 0,
    Temporada: "",
    countries: "",
    Estado: true,
  });

  const handleFormChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(
      validate({
        ...form,
        [name]: value,
      })
    );
  };

  const hanldeSelect = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      countries: [...form.countries, value],
    });
    setErrors(
      validate({
        ...form,
        countries: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", {
        Nombre: form.Nombre,
        Temporada: form.Temporada,
        Dificultad: form.Dificultad,
        Duracion: form.Duracion,
        countries: form.countries,
      })
      .then(function (response) {
        setForm({
          Nombre: "",
          Dificultad: 0,
          Duracion: 0,
          Temporada: "",
          countries: [],
        });
        alert("Creada con exito");
      })
      .catch(function (error) {
        alert("Algo malo sucedio");
      });
  };

  const hadleDelete = (e) => {
    console.log(e);
    console.log(form.countries);
    form.countries = form.countries.filter((country) => country !== e);
    console.log(form.countries);
    setForm({
      ...form,
      countries: form.countries,
    });
  };
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="Nombre">Nombre:</label>
        <input
          type="text"
          name="Nombre"
          value={form.Nombre}
          onChange={handleFormChange}
        ></input>
        {errors.Nombre && <p>*{errors.Nombre}</p>}
        <label htmlFor="Dificultad">Dificultad:</label>
        <input
          type="range"
          min="1"
          max="5"
          name="Dificultad"
          value={form.Dificultad}
          onChange={handleFormChange}
        ></input>
        {errors.Dificultad && <p>*{errors.Dificultad}</p>}
        <label htmlFor="Duracion">Duracion(hs): </label>
        <input
          type="text"
          name="Duracion"
          value={form.Duracion}
          onChange={handleFormChange}
        ></input>
        {errors.Duracion && <p>*{errors.Duracion}</p>}
        <label>Temporada:</label>{" "}
        <div className={style.temporada}>
          <input
            type="radio"
            id="Verano"
            name="Temporada"
            value="Verano"
            onChange={handleFormChange}
          ></input>
            <label for="Verano">Verano</label> {" "}
          <input
            type="radio"
            id="Otono"
            name="Temporada"
            value="Otono"
            onChange={handleFormChange}
          ></input>
            <label for="Otono">Otono</label> {" "}
          <input
            type="radio"
            id="Primavera"
            name="Temporada"
            value="Primavera"
            onChange={handleFormChange}
          ></input>
            <label for="Primavera">Primavera</label>
          <input
            type="radio"
            id="Invierno"
            name="Temporada"
            value="Invierno"
            onChange={handleFormChange}
          ></input>
          <label for="Invierno">Invierno</label>
        </div>
        {/* <label htmlFor="Temporada">Temporada: </label>
        <input
          type="text"
          name="Temporada"
          value={form.Temporada}
          onChange={handleFormChange}
        ></input>*/}
        {errors.Temporada && <p>*{errors.Temporada}</p>}
        <select onChange={hanldeSelect}>
          <option value="none" selected disabled hidden>
            Selecciona un pais
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.Nombre}
            </option>
          ))}
        </select>
        <br></br>
        <label>Paises: </label>
        <input
          type="text"
          value={form.countries}
          onChange={handleFormChange}
        ></input>
        <div className={style.selectetCountries}>
          {form.countries?.map((id) => {
            const actualCountry = countries.find(
              (country) => country.id === id
            );

            return (
              <div className={style.selectCountry}>
                <button
                  type="button"
                  onClick={() => hadleDelete(actualCountry.id)}
                >
                  X
                </button>
                <img
                  src={actualCountry.Imagen_de_la_bandera}
                  alt={actualCountry.name}
                />
                {actualCountry.Nombre}
              </div>
            );
          })}
        </div>
        {errors.countries && <p>*{errors.countries}</p>}
        <br />
        <button type="submit" disabled={errors.Estado}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
