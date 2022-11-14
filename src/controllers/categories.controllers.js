const CategoriesServices = require('../services/categories.services');

const createCategory = async (req, res, next) => {
    try {
      const { category, courses } = req.body;
      const result = await CategoriesServices.create(category, courses);
      res.status(201).json({ message: "new category created" });
    } catch (error) {
      next({
        message: "something went wrong when creating the category",
        status: 400,
        errorContent: error,
      });
    }
  };
  const deleteCategory = async (req, res, next) => {
    try {
      const { category_id } = req.params;
      const result = await CategoriesServices.update(category_id, {status: "Deleted"});
      res.status(200).json( {
        status: 'success',
      });
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    createCategory,
    deleteCategory,
  };