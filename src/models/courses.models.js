const db = require("../utils/data.util");
const { DataTypes } = require("sequelize");
//const Users = require("./user.models"); videos y categorias

const Courses = db.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Courses;