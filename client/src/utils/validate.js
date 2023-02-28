export const  validate= (inputs) =>{
    let errores = {
        Estado : false
    };
    if(!inputs.Nombre){
        errores.Nombre = 'Se requiere un nombre'
        errores.Estado = true
    }
    if(inputs.Dificultad < 1 || inputs.Dificultad>5){
        errores.Dificultad = 'Dificultad debe estar entre 1 y 5'
        errores.Estado = true
    }
    if(inputs.Duracion < 1){
        errores.Duracion = 'Se requiere un Duracion'
        errores.Estado = true
    }
    if(!inputs.Temporada){
        errores.Temporada = 'Se requiere un Temporada'
        errores.Estado = true
    }else if(inputs.Temporada !== "Verano" && inputs.Temporada !== "Otono" && inputs.Temporada !== "Invierno" && inputs.Temporada !== "Primavera" ){
        errores.Temporada = 'Temporada no es ni Verano ni Invierno ni Otoño ni Primavera'
        errores.Estado = true
    }
    if(inputs.countries.length < 1){
        errores.countries = 'Seleccione algun pais'
        errores.Estado = true
    }
    return errores
    
}