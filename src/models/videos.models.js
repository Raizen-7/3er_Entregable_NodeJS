const db = require("../utils/data.util");
const { DataTypes } = require("sequelize");
const Curses = require("./curses.models");// videos y categorias

const Videos = db.define("videos", {
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
  url: {
    type: DataTypes.STRING,
  },
  curseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Curses,
      key: "id",
    },
    field: "curse_id",
    allowNull: false,
  },
});

module.exports = Videos;