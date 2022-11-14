const CoursesServices = require('../services/courses.services');

const getAllCurses = async (req, res, next) => {
    try {
      const result = await CoursesServices.getAllCurses();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  const getCursesCategoriesAndVideos = async (req, res, next) => {
    try {
      const result = await CoursesServices.getCursesCategoriesAndVideos();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  const createCourse = async (req, res, next) => {
    try {
      const { course, categories } = req.body;
      const result = await CoursesServices.create(course, categories);
      res.status(201).json({ message: "new course created" });
    } catch (error) {
      next({
        message: "something went wrong when creating the course",
        status: 400,
        errorContent: error,
      });
    }
  };
  const updateCourse = async (req, res, next) => {
    try {
      const { couse_id } = req.params;
      const newDescription = req.body;
      const result = await CoursesServices.updateCourse(newDescription, couse_id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    getAllCurses,
    getCursesCategoriesAndVideos,
    createCourse,
    updateCourse,
  };