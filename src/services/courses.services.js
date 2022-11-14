const Categories = require('../models/categories.models');
const Courses = require("../models/courses.models");
const UserCurses = require('../models/usersCourses.model');
const Videos = require("../models/videos.models");
const Users = require("../models/users.models");

class CoursesServices {
    static async getAllCurses() {
        try {
          const result = await Courses.findAll({
            attributes: ["id", "title"],
          });
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async getCursesCategoriesAndVideos() {
        try {
          const result = await Courses.findAll({
            attributes: ["id", "title"],
            include: {
                model: Categories,
                as: "categories",
                attributes: ["name"],
                include:{
                    model: Videos,
                    as: "videos",
                    attributes:["title", "url"],
                },
            },
          });
          return result;
        } catch (error) {
          throw error;
        }
    }
    static async create(curse, categories) {
        try {
          const curseResult = await Courses.create(curse);
         
          const { id } = curseResult;
          categories.forEach(
            async (category) =>
              await Categories.create({ categoryId: category, curseId: id })
          );
          return curseResult;
        } catch (error) {
          throw error;
        }
    }
    static async updateCourse(newDescription, id) {
        try {
          const result = await Courses.update(
            { description: newDescription },
            {
              where: { id },
            }
          );
          return result;
        } catch (error) {
          throw error;
        }
      }
};

module.exports = CoursesServices;