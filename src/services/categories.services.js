const Categories = require('../models/categories.models');
const Courses = require("../models/courses.models");

class CategoriesServices {
    static async create(category, courses) {
        try {
          const categoryResult = await Categories.create(category);
         
          const { id } = videoResult;
          courses.forEach(
            async (course) =>
              await Courses.create({ courseId: course, categoryId: id })
          );
          return categoryResult;
        } catch (error) {
          throw error;
        }
    }
    static async updateCourse(category_id) {
        try {
          const result = await Categories.update(
            { status: "Deleted" },
            {
              where: { category_id },
            }
          );
          return result;
        } catch (error) {
          throw error;
        }
      }
};

module.exports = CategoriesServices;