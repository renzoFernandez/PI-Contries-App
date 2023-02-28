const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Activity',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Dificultad:{
            type:DataTypes.INTEGER,
            allowNull: false,
            validate:{
                max: 5,                  
                min: 1
            }
        },
        Duracion:{
            type:DataTypes.INTEGER
        },
        Temporada:{
            type : DataTypes.ENUM('Verano','Otono','Invierno','Primavera'),
            allowNull: false
        }
    })
}