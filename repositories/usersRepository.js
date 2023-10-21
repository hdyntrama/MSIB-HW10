const Users = require("../models/Users");

class UsersRepository {
  static getUsers = (next) => {
    try {
      return Users.getUsers(next);
    } catch (error) {
      next(error);
    }
  };

  static getUserById = (id, next) => {
    try {
      return Users.getUserById(id, next);
    } catch (error) {
      next(error);
    }
  };

  static createUser = (body, next) => {
    try {
      return Users.createUser(body, next);
    } catch (error) {
      next(error);
    }
  };

  static updateUser = (body, params, next) => {
    try {
      return Users.updateUser(body, params, next);
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = (id, next) => {
    try {
      return Users.deleteUser(id, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersRepository;
