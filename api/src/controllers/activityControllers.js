const {Activity} = require('../db')

const postActivity = async (Nombre , Dificultad , Duracion,Temporada)=>{
    if(!Nombre || !Dificultad || !Duracion || !Temporada) throw new Error('Faltan datos obligatorios')
    if(Dificultad < 1 || Dificultad > 5) throw new Error('La dificultad debe estar entre 1 y 5')
    if(Temporada !== "Verano" && Temporada !== "Otono" && Temporada !== "Invierno" && Temporada !== "Primavera" ) throw new Error('Temporada no es ni Verano ni Invierno ni Otoño ni Primavera')
    const newActivity ={
        Nombre , 
        Dificultad , 
        Duracion,
        Temporada
    }
    return Activity.create(newActivity)
}

const getAllActivities = async ()=>{
    const activities = await Activity.findAll()
    return activities
}



module.exports = {
    postActivity,
    getAllActivities
}