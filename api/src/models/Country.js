const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
         type: DataTypes.STRING(3),
         allowNull: false,
         primaryKey: true
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Imagen_de_la_bandera:{
        type: DataTypes.STRING,
        allowNull:false
      },
      Continente:{
        type: DataTypes.STRING,
        allowNull:false
      },
      Capital:{
        type: DataTypes.STRING,
        allowNull:false
      },
      Subregion:{
        type: DataTypes.STRING
      },
      Area:{
        type: DataTypes.DOUBLE
      },
      Poblacion:{
        type:DataTypes.DOUBLE
      }
  });
};
