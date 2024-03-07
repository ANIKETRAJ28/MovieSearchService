'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Movie, {
        through: "MovieTheater",
        as: "movie",
        foreignKey: "theaterId",
        onDelete: "CASCADE"
      });
    }
  }
  Theater.init({
    name: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false
    },
    seats: {
      type: DataTypes.INTEGER,
      require: true,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      require: true,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      require: true,
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
    modelName: 'Theater',
  });
  return Theater;
};