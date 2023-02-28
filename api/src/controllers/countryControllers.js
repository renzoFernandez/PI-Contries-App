const {Country,Activity} = require('../db.js')
const { Op } = require("sequelize");

const getAll = async (name) =>{
    let countries
        if(name === undefined){
            countries = await Country.findAll({
                include : {
                    model:Activity,
                    attributes:["Nombre" , "Dificultad" , "Duracion","Temporada"],
                    through:{
                        attributes : [],
                    }
                }
            });
        }else{
            countries = await Country.findAll({
                where :{
                    Nombre: {
                        [Op.iLike]: "%"+name+"%",
                    }
                }
            });
            if(!countries.length) throw new Error('No se encontro ningun pais con el nombre ingresado');
        }
        
        return countries
}

const getById = async (idPais) =>{
    const country = await Country.findByPk(idPais,{
        include : {
            model:Activity,
            attributes:["Nombre" , "Dificultad" , "Duracion","Temporada"],
            through:{
                attributes : [],
            }
        }
    });
    if(country === null) throw new Error('No se encontro ningun pais con el ID ingresado');
    return country;
}

module.exports = {
    getAll,
    getById
}