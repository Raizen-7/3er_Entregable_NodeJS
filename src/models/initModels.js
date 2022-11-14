const Users = require('./users.models');
const Curses = require('./curses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const UserCurses = require('./usersCourses.model');

const initModels = () => {
    UserCurses.belongsTo(Users, {
        as: "users",
        foreignKey: "user_id",
      });
      Users.hasMany(UserCurses, {
        as: "curses",
        foreignKey: "user_id",
    });

    UserCurses.belongsTo(Curses, {
        as: "curses",
        foreignKey: "curses_id",
      });
      Curses.hasMany(UserCurses, {
        as: "curses",
        foreignKey: "curses_id",
    });
    
    Categories.belongsTo(Curses, { as: "curse", foreignKey: "curse_id" });
    Curses.hasMany(Categories, { as: "categories", foreignKey: "curse_id" });

    Videos.belongsTo(Curses, { as: "curse", foreignKey: "curse_id" });
    Curses.hasMany(Videos, { as: "videos", foreignKey: "curse_id" });
};

module.exports = initModels;