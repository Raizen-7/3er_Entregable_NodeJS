const db = require("../utils/data.util");
const { DataTypes } = require("sequelize");
const Curses = require("./courses.models");// videos y categorias

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
  status: {
    type: DataTypes.STRING,
    defaultValue: "active"
  },
});

module.exports = Videos;