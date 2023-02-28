const { Router } = require('express');
const {getAll , getById} = require('../controllers/countryControllers')

const countryRoutes = Router();
countryRoutes.get('/',async (req,res)=>{
    let {name} = req.query
    try{
        const countries = await getAll(name);
        res.status(200).json(countries)
    }catch(err){
        res.status(400).json({error : err.message})
    }
}) 

countryRoutes.get('/:idPais',async(req,res)=>{
    const id = req.params.idPais.toUpperCase()
    try{
        const country = await getById(id)
        res.status(200).json(country)
    }catch(err){
        res.status(404).json({error : err.message})
    }
})



module.exports = countryRoutes;