const Users = require('../models/users.models');
const Curses = require('../models/curses.models');
const Categories = require('../models/categories.models');
const UserCurses = require('../models/usersCourses.model');

class UserServices {
    static async getById(id) {
        try {
          const result = await Users.findByPk(id, {
            attributes: ["id", "firstname", "lastname", "email"],
          });
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async getUserJoinCurses(id) {
        try {
          const result = await Users.findOne({
            where: { id },
            attributes: ["id", "firstname", "lastname", "email"],
            include: {
              model: Curses,
              as: "curse",
              attributes: ["title"],
              include: {
                model: UserCurses,
                as: "curses",
                attributes: ["curse_id"],
                include: {
                  model: Categories,
                  as: "categories",
                  attributes: ["name"],
                },
              },
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async createUser(newUser) {
        try {
          const result = await Users.create(newUser);
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async updateUser(updateData, id) {
        try {
          const result = await Users.update(updateData, {
            where: { id },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
}

module.exports = UserServices;