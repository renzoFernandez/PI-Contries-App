const { Router } = require('express');
const{postActivity,getAllActivities} = require ('../controllers/activityControllers')

const activityRoutes = Router();

activityRoutes.post('/', async (req,res)=>{
    
    try{
        const {Nombre , Dificultad , Duracion,Temporada ,countries} = req.body
        const newActivity = await postActivity(Nombre , Dificultad , Duracion,Temporada)
        await newActivity.addCountries(countries)
        res.status(200).json(newActivity)
    }catch(err){
        res.status(404).send( err.message)
    }
})

activityRoutes.get('/',async (req,res)=>{
    try{
        const activities = await getAllActivities()
        res.status(200).json(activities)
    }catch(err){
        res.status(404).json({error : err.message})
    }
})
module.exports = activityRoutes;