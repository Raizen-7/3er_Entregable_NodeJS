//servicess users to controllers
const UserServices = require("../Services/users.services");

//Controllers to user's req.
const getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await UserServices.getById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  const getUserWithCurse = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await UserServices.getUserJoinCurses(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  const createNewUser = async (req, res, next) => {
    try {
      const newUser = req.body;
      const result = await UserServices.createUser(newUser);
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 418,
        errorContent: error,
        message: "something is wrong, check the sent data",
      });
    }
  };

  const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const dataUpdate = req.body;
      const result = await UserServices.update(dataUpdate, id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
 
  module.exports = {
    getUserById,
    getUserWithCurse,
    createNewUser,
    updateUser,
  };