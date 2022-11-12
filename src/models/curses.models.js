const db = require("../utils/data.util");
const { DataTypes } = require("sequelize");
//const Users = require("./user.models"); videos y categorias

const Curses = db.define("curses", {
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
  iinstructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //las referencias son de los videos y categorias
//   userId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Users,
//       key: "id",
//     },
//     field: "user_id",
//     allowNull: false,
//   },
});

module.exports = Curses;