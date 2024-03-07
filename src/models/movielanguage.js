'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieLanguage.init({
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
    languageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      require: true,
      references: {
        model: "Language",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'MovieLanguage',
  });
  return MovieLanguage;
};