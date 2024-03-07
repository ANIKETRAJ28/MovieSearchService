'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Theater, {
        through: "MovieTheater",
        as: "theater",
        foreignKey: "movieId"
      });
    }
  }
  Movie.init({
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true
    },
    duration: {
      type: DataTypes.TIME,
      required: true,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    ratings: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5'],
      required: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};