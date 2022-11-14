const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const UserCourses = require('./usersCourses.model');

const initModels = () => {
    UserCourses.belongsTo(Users, {
        as: "users",
        foreignKey: "user_id",
      });
      Users.hasMany(UserCourses, {
        as: "curses",
        foreignKey: "user_id",
    });

    UserCourses.belongsTo(Courses, {
        as: "curses",
        foreignKey: "curses_id",
      });
      Courses.hasMany(UserCourses, {
        as: "curses",
        foreignKey: "curses_id",
    });
    
    Categories.belongsTo(Courses, { as: "curse", foreignKey: "curse_id" });
    Courses.hasMany(Categories, { as: "categories", foreignKey: "curse_id" });

    Videos.belongsTo(Courses, { as: "curse", foreignKey: "curse_id" });
    Courses.hasMany(Videos, { as: "videos", foreignKey: "curse_id" });
};

module.exports = initModels;