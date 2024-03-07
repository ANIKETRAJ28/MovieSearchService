'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieTheater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieTheater.init({
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      require: true,
      references: {
        model: "Movie",
        key: "id"
      }
    },
    theaterId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      require: true,
      references: {
        model: "Theater",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'MovieTheater',
  });
  return MovieTheater;
};

