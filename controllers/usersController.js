const UsersService = require("../services/usersService");

class UsersController {
  static getUsers = async (req, res, next) => {
    try {
      const data = await UsersService.getUsers(next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await UsersService.getUserById(id, next);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const data = await UsersService.createUser(req.body, next);
      res.status(201).json({ message: "Success added user", data });
    } catch (error) {
      next(error);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const data = await UsersService.updateUser(req.body, req.params, next);
      res.status(200).json({ message: "Success updated user", data });
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UsersService.deleteUser(id, next);

      if (!data) {
        next({ status: 404, message: "Data not found" });
      } else {
        res
          .status(200)
          .json({ message: `Success deleted user with id : ${id}`, data });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersController;
