const db = require("../utils/data.util");
const { DataTypes } = require("sequelize");
const Curses = require("./curses.models");
const Users = require('./users.models') 

const UserCurses = db.define( "user_curses",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      field: "user_id",
    },
    curseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Curses,
        key: "id",
      },
      field: "curse_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserCurses;