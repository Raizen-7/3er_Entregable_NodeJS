const db = require('../utils/data.util');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

const Users = db.define( "users",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8); // devuelve las contraseña en un hash (encriptada)
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
